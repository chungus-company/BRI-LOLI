//Google analytics (Analiza las teclas que son oprimidas)



/*
function createPlayer($container) {
  GAME_STATE.playerX = GAME_WIDTH / 30;
  GAME_STATE.playerY = GAME_HEIGHT - 60;
  const $player = document.createElement("img");
  $player.src = "img/pikachugif.gif";
  $player.className = "player";
  $container.appendChild($player);
  setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
} 



body {
background-color:black; 
margin: 0px; 
text-align: center; } 
    
#gameScreen {
background: url(../img/Background.jpeg) ;
background-color:black;
width: 800px; 
animation: scroll-background 5s linear infinite;
height: 600px; 
margin: 10px 10px 10px 10px; 
border: 1px solid #000000; 
box-shadow: 10px 10px 20px #000000; 
}


/* 

#img {position:absolute; bottom:185px; right: -50px} 


#img2 {position:absolute; bottom:185px; left: -50px} 






 <style>
    .hidden {
       visibility: hidden;
    }

    .visible {
      visibility: visible;
    }

    .frame {
      position: absolute;
    }
  </style>
<body>
    <div id="game">
      <div id="main" class="frame visible">
        <h1>
          Espacio estelar
        </h1>
        <button onclick="game.setFrameVisible('canvas');game.setFrameHidden('main');">
          Jugar
        </button>
        <button onclick="game.setFrameVisible('highscores');game.setFrameHidden('main');">
          Puntuaciones
        </button>
        <button onclick="game.setFrameVisible('about');game.setFrameHidden('main');">
          Cr&eacute;ditos
        </button>
      </div>
      <div id="canvas" class="frame hidden">
        <canvas></canvas>
        <button onclick="game.setFrameVisible('main');game.setFrameHidden('canvas');">
          Volver al men&uacute;
        </button>
      </div>
      <div id="highscores" class="frame hidden">
        <h1>
          Puntuaciones m&aacute;s altas
        </h1>
        <button onclick="game.setFrameVisible('main');game.setFrameHidden('highscores');">
          Volver al men&uacute;
        </button>
      </div>
      <div id="about" class="frame hidden">
        <h1>
          Yo soy el creador
        </h1>
        <button onclick="game.setFrameVisible('main');game.setFrameHidden('about');">
          Volver al men&uacute;
        </button>
      </div>
    </div>
  </body>


<style>         @font-face {             font-family: "danube";             src: url("fonts/danube.woff") format("woff"),                 url("fonts/danube.ttf") format("truetype");         }         .hidden {             -webkit-transition: opacity 1s;             z-index: 0;             opacity: 0;         }         .visible {             -webkit-transition: opacity 1s;             z-index: 1;             opacity: 1;         }         .frame {             position: absolute;             width: 600px;             height: 500px;             font-family: "danube";             color: white;             text-shadow: 0px 0px 20px #00FF00;             -webkit-user-select: none;             font-size: 25px;         }         .frame button {             -webkit-transition: border-radius 1s, text-shadow 1s, color 1s;             font-family: "danube";             font-size: 30px;             color: #EEE;             margin: 10px;             padding: 10px;             width: 300px;             background: none;             text-shadow: 0px 0px 8px white;             border: 1px solid #dedede;             border-radius: 3px;             text-decoration: none;             border-color: #8dc5da #76b7cf #63abc7;             box-shadow: 0px 3px 5px rgba(255, 255, 255, 0.5);         }         .frame button:hover {             border-radius: 20px;             text-shadow: 0px 0px 50px white;             color: white;         }         .frame button:active {             text-shadow: 0px 0px 20px #00FF00;         }         body {             text-align: center;             margin: 0 auto;             width: 600px;             height: 500px;             margin-top: 50px;             background-image: url('img/back1.jpg');         }     </style>     <script>         function Game(gameDiv)         {             var frames = [];             var framesNames = [];             for (var i=0; i<gameDiv.childNodes.length; i++)             {                 var id = gameDiv.childNodes[i].id;                 if (id != undefined)                 {                     var child = gameDiv.childNodes[i];                     if (child.classList.contains("frame"))                     {                         frames[id] = child;                         framesNames.push(id);                     }                 }             }             function setFrameVisible(name)             {                 frames[name].classList.remove("hidden");                 frames[name].classList.add("visible");             }             function setFrameHidden(name)             {                 frames[name].classList.remove("visible");                 frames[name].classList.add("hidden");             }             return {                 "setFrameVisible": setFrameVisible,                 "setFrameHidden": setFrameHidden             };         }         window.addEventListener("load", function ()         {             game = new Game(document.getElementById("game"));         });         var game;     </script>     <body>         <div id="game">             <div id="main" class="frame visible">                 <h1>                     Espacio estelar                 </h1>                 <button onclick="game.setFrameVisible('canvas');game.setFrameHidden('main');">                     Jugar                 </button>                 <button onclick="game.setFrameVisible('highscores');game.setFrameHidden('main');">                     Puntuaciones                 </button>                 <button onclick="game.setFrameVisible('about');game.setFrameHidden('main');">                     Creditos                 </button>             </div>             <div id="canvas" class="frame hidden">                 <canvas></canvas>                 <button onclick="game.setFrameVisible('main');game.setFrameHidden('canvas');">                     Volver al menu                 </button>             </div>             <div id="highscores" class="frame hidden">                 <h1>                     Puntuaciones mas altas                 </h1>                 <button onclick="game.setFrameVisible('main');game.setFrameHidden('highscores');">                     Volver al menu                 </button>             </div>             <div id="about" class="frame hidden">                 <h2>                     ProgrammingHeroes                 </h2>                 <br />                 <a href="http://programmingheroes.blogspot.com.es/">                     <img src="img/ph.png" style="width: 100px; height: 120px;"/>                 </a>                 <br />                 <button onclick="game.setFrameVisible('main');game.setFrameHidden('about');">                     Volver al menu                 </button>             </div>         </div>     </body>


<style>         
    @font-face {      
    font-family: "danube";             
    src: url("fonts/danube.woff") format("woff"), url("fonts/danube.ttf") format("truetype");        
    }         
     
    .hidden {     
    -webkit-transition: opacity 1s;           
    z-index: 0;             
    opacity: 0;        
       }         
       
       
    .visible {             
    -webkit-transition: opacity 1s;             
    z-index: 1;             opacity: 1;         
    }         
    
    .frame {            
    position: absolute;             
    width: 600px;             
    height: 500px;             
    font-family: "danube";             
    color: white;             
    text-shadow: 0px 0px 20px #00FF00;             
    -webkit-user-select: none;             
    font-size: 25px;         
    }        
    
    .frame button {             
    -webkit-transition: border-radius 1s, text-shadow 1s, color 1s;             
    font-family: "danube";             
    font-size: 30px;             
    color: #EEE;             
    margin: 10px;             
    padding: 10px;             
    width: 300px;             
    background: none;             
    text-shadow: 0px 0px 8px white;             
    border: 1px solid #dedede;             
    border-radius: 3px;             
    text-decoration: none;            
    border-color: #8dc5da #76b7cf #63abc7;            
    box-shadow: 0px 3px 5px rgba(255, 255, 255, 0.5);        
    }         
        
        
    .frame button:hover {             
    border-radius: 20px;            
    text-shadow: 0px 0px 50px white;             
    color: white;         
    }         
    
    .frame button:active {            
    text-shadow: 0px 0px 20px #00FF00;         
    }         
    
    body {            
    text-align: center;             
    margin: 0 auto;             
    width: 600px;             
    height: 500px;             
    margin-top: 50px;             
    background-image: url('img/back1.jpg');         
    }    
    </style>    
    <script>         
    
    function Game(gameDiv){            
    var frames = [];             
    var framesNames = [];             
    for (var i=0; i<gameDiv.childNodes.length; i++) {var id = gameDiv.childNodes[i].id;    
        if (id != undefined)   {var child = gameDiv.childNodes[i];                    
         if (child.classList.contains("frame"))  {frames[id] = child;                        
          framesNames.push(id);  
                } 
            } 
        }             
          
        
          
    function setFrameVisible(name) { frames[name].classList.remove("hidden");                 
    frames[name].classList.add("visible"); 
    }             
    
    
    function setFrameHidden(name) {                 
        frames[name].classList.remove("visible");                 
        frames[name].classList.add("hidden");            
        
        }            
        
        
    return {"setFrameVisible": setFrameVisible, "setFrameHidden": setFrameHidden };        
     }         
     
     
    window.addEventListener("load", function ()  {    game = new Game(document.getElementById("game"));  });         
    
    var game;     
    </script>     
    <body>        
         <div id="game">             
             <div id="main" class="frame visible">                
                  <h1>                     Espacio estelar                 </h1>                 
                  <button onclick="game.setFrameVisible('canvas');game.setFrameHidden('main');"> Jugar </button>  
                           <button onclick="game.setFrameVisible('highscores');game.setFrameHidden('main');"> Puntuaciones</button>                 
                                <button onclick="game.setFrameVisible('about');game.setFrameHidden('main');"> Creditos </button>             
                            
                            </div>            
                            <div id="canvas" class="frame hidden"> <canvas></canvas> <button onclick="game.setFrameVisible('main');game.setFrameHidden('canvas');"> Volver al menu</button>      
                            </div> 

                            <div id="highscores" class="frame hidden"><h1> Puntuaciones mas altas </h1> 
                                <button onclick="game.setFrameVisible('main');game.setFrameHidden('highscores');">  Volver al menu  </button>             
                            </div>             
                                <div id="about" class="frame hidden"> <h2>  ProgrammingHeroes  </h2> 
                                     <br />                 
                                     <a href="http://programmingheroes.blogspot.com.es/">   <img src="img/ph.png" style="width: 100px; height: 120px;"/> </a>   
                                         <br />                 
                                            <button onclick="game.setFrameVisible('main');game.setFrameHidden('about');">     Volver al menu   </button>  
                                        </div>         
                                    </div>     
                                </body>



    body {            
            text-align: center;             
            margin: 0 auto;             
            width: 600px;             
            height: 500px;             
            margin-top: 50px;             
            background-image: url('img/back1.jpg');         
            }    






               <style>
        .hidden {
           visibility: hidden;
        }
    
        .visible {
          visibility: visible;
        }
    
        .frame {
          position: absolute;
        }
      </style>
      









      <style>         
            @font-face {      
            font-family: "danube";             
            src: url("fonts/danube.woff") format("woff"), url("fonts/danube.ttf") format("truetype");        
            }         
             
            .hidden {     
            -webkit-transition: opacity 1s;           
            z-index: 0;             
            opacity: 0;        
               }         
               
               
            .visible {             
            -webkit-transition: opacity 1s;             
            z-index: 1;             opacity: 1;         
            }         
            
            .frame {            
            position: absolute;             
            width: 600px;             
            height: 500px;             
            font-family: "danube";             
            color: white;             
            text-shadow: 0px 0px 20px #00FF00;             
            -webkit-user-select: none;             
            font-size: 25px;         
            }        
            
            .frame button {             
            -webkit-transition: border-radius 1s, text-shadow 1s, color 1s;             
            font-family: "danube";             
            font-size: 30px;             
            color: #EEE;             
            margin: 10px;             
            padding: 10px;             
            width: 300px;             
            background: none;             
            text-shadow: 0px 0px 8px white;             
            border: 1px solid #dedede;             
            border-radius: 3px;             
            text-decoration: none;            
            border-color: #8dc5da #76b7cf #63abc7;            
            box-shadow: 0px 3px 5px rgba(255, 255, 255, 0.5);        
            }         
                
                
            .frame button:hover {             
            border-radius: 20px;            
            text-shadow: 0px 0px 50px white;             
            color: white;         
            }         
            
            .frame button:active {            
            text-shadow: 0px 0px 20px #00FF00;         
            }         
            
            body {            
            text-align: center;             
            margin: 0 auto; 
            top: 200 ;          
            width: 600px;             
            height: 500px;             
            margin-top: 50px;             
            
            }    
            
            </style>    
            <script>         
            
            function Game(gameDiv){            
            var frames = [];             
            var framesNames = [];             
            for (var i=0; i<gameDiv.childNodes.length; i++) {var id = gameDiv.childNodes[i].id;    
                if (id != undefined)   {var child = gameDiv.childNodes[i];                    
                 if (child.classList.contains("frame"))  {frames[id] = child;                        
                  framesNames.push(id);  
                        } 
                    } 
                }             
                  
                
                  
            function setFrameVisible(name) { frames[name].classList.remove("hidden");                 
            frames[name].classList.add("visible"); 
            }             
            
            
            function setFrameHidden(name) {                 
                frames[name].classList.remove("visible");                 
                frames[name].classList.add("hidden");            
                
                }            
                
                
            return {"setFrameVisible": setFrameVisible, "setFrameHidden": setFrameHidden };        
             }         
             
             
            window.addEventListener("load", function ()  {    game = new Game(document.getElementById("game"));  });         
            
            var game;     
            </script>     
            <body>        
                 <div id="game">             
                     <div id="main" class="frame visible">                
                          <h1>                     Espacio estelar                 </h1>                 
                          <button onclick="game.setFrameVisible('canvas');game.setFrameHidden('main');"> Jugar </button>  
                                   <button onclick="game.setFrameVisible('highscores');game.setFrameHidden('main');"> Puntuaciones</button>                 
                                        <button onclick="game.setFrameVisible('about');game.setFrameHidden('main');"> Creditos </button>             
                                    
                                    </div>            
                                    <div id="canvas" class="frame hidden"> <canvas></canvas> <button onclick="game.setFrameVisible('main');game.setFrameHidden('canvas');"> Volver al menu</button>      
                                    </div> 
        
                                    <div id="highscores" class="frame hidden"><h1> Puntuaciones mas altas </h1> 
                                        <button onclick="game.setFrameVisible('main');game.setFrameHidden('highscores');">  Volver al menu  </button>             
                                    </div>             
                                        <div id="about" class="frame hidden"> <h2>  ProgrammingHeroes  </h2> 
                                             <br />                 
                                             <a href="https://twitter.com/agustiin_rivera" target="_blank">@agustiin_rivera</a>  
                                                 <br />                 
                                                    <button onclick="game.setFrameVisible('main');game.setFrameHidden('about');">     Volver al menu   </button>  
                                                </div>         
                                            </div>     
                                        </body>




            if (playerHasWon()) {
    document.querySelector(".congratulations").style.display = "block";
    return;
  }


                                        

















  function loadScript(url, callback){

  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.onreadystatechange = callback;
  script.onload = callback;
  head.appendChild(script);
}

function update(e) {    //carteles 
  const currentTime = Date.now();
  const dt = (currentTime - GAME_STATE.lastTime) / 1000.0;

  if (GAME_STATE.gameOver) {
    document.querySelector(".game-over").style.display = "block";
    return;
  }

  if (playerHasWon()) {
    document.querySelector(".congratulations").style.display = "block";
    loadScript("MiArfchivoJavascript.js", MiArchivoCargado);

    return;
  }

  function MiArchivoCargado(){
    alert('MiArchivoJavascript.js ya ha sido cargado');
}













<audio id="Inicio" preload><source src="Sonidos/Galaxian - Inicio del Juego.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="Disparo1Nave" preload><source src="Sonidos/Galaxian/Disparo 1.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="Disparo2Nave" preload><source src="Sonidos/Galaxian/Disparo 2.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="NaveDestruida" preload><source src="Sonidos/Galaxian/Nave Destruida.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="MuerteEnemigo" preload><source src="Sonidos/Galaxian/Muerte Enemigo.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="MuerteEnemigo2" preload><source src="Sonidos/Galaxian/Muerte Enemigo 2.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="ApareceelBoss" preload><source src="Sonidos/Galaxian/ApareceelBoss.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="Nivel completado2" preload><source src="Sonidos/Galaxian/Nivel Completado 2.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="Nivel completado" preload><source src="Sonidos/Galaxian/Nivel Completado.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="Game Over" preload><source src="Sonidos/Galaxian/Game Over.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="Vida Extra" preload><source src="Sonidos/Galaxian/Vida Extra.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>
        <audio id="Sonido del enemigo" preload><source src="Sonidos/Galaxian/Sound enemy.ogg" type="audio/ogg" />Tu navegador no es compatible con el elemento audio de html5. Use un navegador compatible.</audio>








        


*/
            // Class KeyboardListener.         la del espacio 255
            function KeyboardListener() {
            // Properties.
            this.keychar = null;
            this.getPressed = function () {
            return this.keychar;
            };
            this.kLeft = function () {
            return String.fromCharCode(97);
            };
            this.kUp = function () {
            return String.fromCharCode();
            };
            this.kRight = function () {
            return String.fromCharCode(100);
            };
            this.kDown = function () {
            return String.fromCharCode();
            };


            this.listenKeydown = function (e) {
            var keynum;

            if(window.event) keynum = e.keyCode; // IE8 and earlier.
            else if(e.which) keynum = e.which; // IE9/Firefox/Chrome/Opera/Safari.

            this.keychar = String.fromCharCode(keynum);

            return true;
            };
            this.listenKeyup = function (e) {
            this.keychar = null;
            return true;
            };
        }
                / Class Character.
        function Character() {
        // Properties.
        this.image = new Image(); this.image.src = "img/prota";
        this.xPos = 50; this.yPos = 0;
        this.died = false;

        //Sigue el codigo
        }