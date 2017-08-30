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
     strings: ["Jonathan Polakoff", "Web developer, journalist and"],
     speed: 150,
     html: true,
     autoStart: true,
     breaklines: true,
     cursor: true,
   })
  //  setInterval ('cursorAnimation()', 1000)
})
