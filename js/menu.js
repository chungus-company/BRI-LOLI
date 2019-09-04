
    function Game(gameDiv)
    {
      var frames = [];
      var framesNames = [];

      for (var i=0; i<gameDiv.childNodes.length; i++)
      {
        var id = gameDiv.childNodes[i].id;
        if (id != undefined)
        {
          var child = gameDiv.childNodes[i];
          if (child.classList.contains("frame"))
          {
            frames[id] = child;
            framesNames.push(id);
          }
        }
      }

      function setFrameVisible(name)
      {
        frames[name].classList.remove("hidden");
        frames[name].classList.add("visible");
      }

      function setFrameHidden(name)
      {
        frames[name].classList.remove("visible");
        frames[name].classList.add("hidden");
      }

      return {
        "setFrameVisible": setFrameVisible,
        "setFrameHidden": setFrameHidden
      };
    }

    window.addEventListener("load", function ()
    {
      game = new Game(document.getElementById("game"));
    });

    var game;
