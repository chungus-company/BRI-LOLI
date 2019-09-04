function importar(url) {
  var script = document.createElement('script');
  var parentScript = document.getElementById('myscript');
  parentScript = parentScript.src;
  parentScript = parentScript.split('/');
  parentScript.pop();
  parentScript = parentScript.join();
  parentScript = parentScript.replace(/,/gi, '/');
  script.src = parentScript+url;
  var body = document.body;
  body.appendChild(script);
}

import('Game2.js');

const KEY_CODE_LEFT = 37; //movimiento del personaje flecha izquierda
const KEY_CODE_RIGHT = 39; //movimiento del personaje flecha derecha
const KEY_CODE_ESC = 27; //disparo del personaje tecla ESC

const GAME_WIDTH = 800; //anchura del gameScreen
const GAME_HEIGHT = 600; //largo del gameScreen

const PLAYER_WIDTH = 20; //posicion del jugador 
const PLAYER_MAX_SPEED = 550.0; //velocidad del jugador
const LASER_MAX_SPEED = 1000.0;  //velocidad del laser
const LASER_MAX_SPEED_ENEMY = 400.0;  //velocidad del laser del enemigo
const LASER_COOLDOWN = 0.4; //tiempo de reutilización

const ENEMIES_PER_ROW = 2; //enemigos por fila, cantidad de enemigos 
const ENEMY_HORIZONTAL_PADDING = 80;//distancia horizontal del enemigo 
const ENEMY_VERTICAL_PADDING = 70;//distancia vertical del enemigo
const ENEMY_VERTICAL_SPACING = 80; 
const ENEMY_COOLDOWN = 7.5;//tiempo de disparo del enemigo

const GAME_STATE = { //Estado del juego, inicializamos las variables
  lastTime: Date.now(),
  leftPressed: false,
  rightPressed: false,
  escPressed: false,
  playerX: 0,
  playerY: 0,
  playerCooldown: 0,
  lasers: [],
  enemies: [],
  enemyLasers: [],
  gameOver: false
};

function rectsIntersect(r1, r2) { //limite hasta donde puede llegar el jugador
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}

function setPosition(el, x, y) { //le damos la ubicacion al jugador
  el.style.transform = `translate(${x}px, ${y}px)`;
}

function clamp(v, min, max) { //definimos el limite del jugador
  if (v < min) {
    return min;
  } else if (v > max) {
    return max;
  } else {
    return v;
  }
}

function rand(min, max) { 
  if (min === undefined) min = 0;
  if (max === undefined) max = 1;
  return min + Math.random() * (max - min);
}

function createPlayer($container) { //creacion del jugador
  GAME_STATE.playerX = GAME_WIDTH / 2;
  GAME_STATE.playerY = GAME_HEIGHT - 50;
  const $player = document.createElement("img");
  $player.src = "imagenes/Personajes/Jugador.png";
  $player.className = "player";
  $container.appendChild($player);
  setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}

function destroyPlayer($container, player) { //definimos la funcion para que cuando el jugador muera se reproduzca el sonido
  $container.removeChild(player);
  GAME_STATE.gameOver = true;
  const audio = new Audio("Sonidos/deathSound.ogg");
  audio.play();
}

function updatePlayer(dt, $container) { //actualizacion constante del jugador
  if (GAME_STATE.leftPressed) {//su velocidad de movimiento
    GAME_STATE.playerX -= dt * PLAYER_MAX_SPEED;
  }
  if (GAME_STATE.rightPressed) {
    GAME_STATE.playerX += dt * PLAYER_MAX_SPEED;
  }

  GAME_STATE.playerX = clamp(//su posicion y su movimiento
    GAME_STATE.playerX,
    PLAYER_WIDTH,
    GAME_WIDTH - PLAYER_WIDTH
  );

  if (GAME_STATE.escPressed && GAME_STATE.playerCooldown <= 0) {//Disparo
    createLaser($container, GAME_STATE.playerX, GAME_STATE.playerY);
    GAME_STATE.playerCooldown = LASER_COOLDOWN;
  }
  if (GAME_STATE.playerCooldown > 0) {//penalizacion por cada disparo
    GAME_STATE.playerCooldown -= dt;
  }

  const player = document.querySelector(".player");//aplica el css
  setPosition(player, GAME_STATE.playerX, GAME_STATE.playerY);
}

function createLaser($container, x, y) { //creacion del disparo del personaje y su respectivo sonido
  const $element = document.createElement("img");
  $element.src = "imagenes/Acciones/Disparo-aliado.png";
  $element.className = "laser";
  $container.appendChild($element);
  const laser = { x, y, $element };
  GAME_STATE.lasers.push(laser);
  const audio = new Audio("Sonidos/bulletSound.ogg");
  audio.play();
  setPosition($element, x, y);
}

function updateLasers(dt, $container) {//actualizacion continuamente del disparo del jugador
  const lasers = GAME_STATE.lasers;
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y -= dt * LASER_MAX_SPEED;
    if (laser.y < 0) {
      destroyLaser($container, laser);
    }
    setPosition(laser.$element, laser.x, laser.y);//la posicion de donde va a ser disparado el laser
    const r1 = laser.$element.getBoundingClientRect();
    const enemies = GAME_STATE.enemies;
    for (let j = 0; j < enemies.length; j++) {
      const enemy = enemies[j];
      if (enemy.isDead) continue;
      const r2 = enemy.$element.getBoundingClientRect();
      if (rectsIntersect(r1, r2)) {
        // el enemigo fue golpeado
        destroyEnemy($container, enemy);
        destroyLaser($container, laser);
        break;
      }
    }
  }
  GAME_STATE.lasers = GAME_STATE.lasers.filter(e => !e.isDead); //la muerte del disparo
}

function destroyLaser($container, laser) { //La colision del disparo
  $container.removeChild(laser.$element);
  laser.isDead = true;
}

function createEnemy($container, x, y) { //creacion del enemigo
  const $element = document.createElement("img");
  $element.src = "imagenes/Personajes/Enemigo.png";
  $element.className = "enemy";
  $container.appendChild($element);
  const enemy = {
    x,
    y,
    cooldown: rand(0.5, ENEMY_COOLDOWN),
    $element
  };
  GAME_STATE.enemies.push(enemy);
  setPosition($element, x, y);
}


function updateEnemies(dt, $container) {//Actualizacion del enemigo
  const dx = Math.sin(GAME_STATE.lastTime / 1000.0) * 50;
  const dy = Math.cos(GAME_STATE.lastTime / 1000.0) * 10;

  const enemies = GAME_STATE.enemies;//Su movimiento y su respectivo laser
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const x = enemy.x + dx;
    const y = enemy.y + dy;
    setPosition(enemy.$element, x, y);
    enemy.cooldown -= dt;
    if (enemy.cooldown <= 0) {
      createEnemyLaser($container, x, y);
      enemy.cooldown = ENEMY_COOLDOWN;
    }
  }
  GAME_STATE.enemies = GAME_STATE.enemies.filter(e => !e.isDead);
}

//La destruccion del enemigo
function destroyEnemy($container, enemy) {
  $container.removeChild(enemy.$element);
  const audio = new Audio("Sonidos/deathenemy.ogg");
  audio.play();
  enemy.isDead = true;
}

function createEnemyLaser($container, x, y) { //creacion del disparo del enemigo
  const $element = document.createElement("img");
  $element.src = "imagenes/Acciones/Disparo-enemigo.png";
  $element.className = "enemy-laser";
  $container.appendChild($element);
  const laser = { x, y, $element };
  GAME_STATE.enemyLasers.push(laser);
  setPosition($element, x, y);
}

function updateEnemyLasers(dt, $container) { // Actualizacion del disparo, colision del disparo
  const lasers = GAME_STATE.enemyLasers;
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y += dt * LASER_MAX_SPEED_ENEMY;
    if (laser.y > GAME_HEIGHT) {
      destroyLaser($container, laser);
    }
    setPosition(laser.$element, laser.x, laser.y); //posicion del disparo
    const r1 = laser.$element.getBoundingClientRect();
    const player = document.querySelector(".player");
    const r2 = player.getBoundingClientRect();
    if (rectsIntersect(r1, r2)) {
      // El jugador recibio un disparo
      destroyPlayer($container, player);
      break;
    }
  }
  GAME_STATE.enemyLasers = GAME_STATE.enemyLasers.filter(e => !e.isDead);
}

function init() {//aplicamos css al personaje
  const $container = document.querySelector(".game");
  createPlayer($container);

  const enemySpacing =
    (GAME_WIDTH - ENEMY_HORIZONTAL_PADDING * 2) / (ENEMIES_PER_ROW - 1);
  for (let j = 0; j < 3; j++) {
    const y = ENEMY_VERTICAL_PADDING + j * ENEMY_VERTICAL_SPACING;
    for (let i = 0; i < ENEMIES_PER_ROW; i++) {
      const x = i * enemySpacing + ENEMY_HORIZONTAL_PADDING;
      createEnemy($container, x, y);
    }
  }
}

function playerHasWon() {
  return GAME_STATE.enemies.length === 0;
}


function update(e) {
  const currentTime = Date.now();
  const dt = (currentTime - GAME_STATE.lastTime) / 1000.0;

  if (GAME_STATE.gameOver) {
    document.querySelector(".game-over").style.display = "block";
    return;
  }

  if (playerHasWon()) {
  }

  const $container = document.querySelector(".game");
  updatePlayer(dt, $container);
  updateLasers(dt, $container);
  updateEnemies(dt, $container);
  updateEnemyLasers(dt, $container);

  GAME_STATE.lastTime = currentTime;
  window.requestAnimationFrame(update);
}

function onKeyDown(e) {
  if (e.keyCode === KEY_CODE_LEFT) {
    GAME_STATE.leftPressed = true;
  } else if (e.keyCode === KEY_CODE_RIGHT) {
    GAME_STATE.rightPressed = true;
  } else if (e.keyCode === KEY_CODE_ESC) {
    GAME_STATE.escPressed = true;
  }
}

function onKeyUp(e) {
  if (e.keyCode === KEY_CODE_LEFT) {
    GAME_STATE.leftPressed = false;
  } else if (e.keyCode === KEY_CODE_RIGHT) {
    GAME_STATE.rightPressed = false;
  } else if (e.keyCode === KEY_CODE_ESC) {
    GAME_STATE.escPressed = false;
  }
}

init();
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);
