$(document).ready(function() {

  // Will's JS
  var audio = new Audio('audio/sounds.wav');

  $('#will-moritz').mouseenter(function() {
    audio.play();
  }).mouseleave(function(){
    audio.pause();
  });









});
