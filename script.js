var soundID = "Edgar";

function loadSound () {
       createjs.Sound.registerSound("Assets/EdgarTheme.mp3", soundID);
     }
     function playSound () {
        createjs.Sound.play(soundID);
      }

/*
    var assetPath = "/Assets";
    var sounds = [
        {src:"EdgarTheme.mp3", loop:-1},
        {src:"Edgar2.mp3", loop:-1},
        {src:"Edgar3.mp3", loop:-1},
        {src:"Edgar4.mp3", loop:-1},
        {src:"Edgar5.mp3", loop:-1},
        {src:"Edgar6.mp3", loop:-1},
        function playSound () {
           createjs.Sound.play(soundID);
         }
*/
$.fn.extend({
    animateCss: function (fadeOut) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + fadeOut).one(animationEnd, function() {
            $(this).removeClass('animated ' +fadeOut);
        });
    }

});

$('#h1').animateCss('fadeOut');
