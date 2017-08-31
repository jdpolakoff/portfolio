// credit: http://burnmind.com/tutorials/how-to-create-a-typing-effect-an-eraser-effect-and-a-blinking-cursor-using-jquery


// function cursorAnimation() {
//     $('#cursor').animate({
//         opacity: 0
//     }, 'fast', 'swing').animate({
//         opacity: 1
//     }, 'fast', 'swing')
// }

$(document).ready(function() {
    $('.stuff h1').typeIt({
     strings: ["Jonathan Polakoff", "Web developer & journalist"],
     speed: 150,
     html: true,
     autoStart: true,
     breaklines: true,
     cursor: true,
   })
   $('.logos').delay(7500).fadeIn(1000)
  //  setInterval ('cursorAnimation()', 1000)
})
