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
     speed: 50,
     html: true,
     autoStart: true,
     breaklines: true,
     cursor: true,
   })
   $('.logos').delay(3500).fadeIn(1000)
   $('body').particleground({
     dotColor: '#5d9afc',
     lineColor: '#5d9afc',
     paralax: false,
     density: 10000,
     maxSpeedX: .7,
     maxSpeedY: .5,
     directionX: 'center',
     lineWidth: 1,
     particleRadius: 9,
     proximity: 140
});
  //  setInterval ('cursorAnimation()', 1000)
})
