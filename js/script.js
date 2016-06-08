$(document).ready(function() {

  // Will's JS
  var audio = new Audio('audio/chacarron.mp3');

  $('#will-moritz').mouseenter(function() {
    audio.play();
  }).mouseleave(function(){
    audio.pause();
  });









});
