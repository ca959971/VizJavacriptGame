var soundID = "Edgar", {loop;

function loadSound () {
       createjs.Sound.registerSound("assets/EdgarTheme.m4a", soundID);
     }
     function playSound () {
        createjs.Sound.play(soundID);
      }
