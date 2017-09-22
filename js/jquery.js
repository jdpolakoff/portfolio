
$(document).ready(function() {
    $('.stuff h1').typeIt({
     strings: ["Jonathan Polakoff", "Web developer & journalist"],
     speed: 20,
     html: true,
     autoStart: true,
     breaklines: true,
     cursor: true,
   })
    $('.logos').delay(2000).fadeIn(1000)
    $('body').particleground({
       randomStrokeColor: true,
       strokeColorMin: 0,
       strokeColorMax: 15,
       paralax: true,
       density: 12000,
       maxSpeedX: .7,
       maxSpeedY: .5,
       lineWidth: 0,
       particleRadius: 5,
       proximity: 100
})
// var $words = {
//     word: "apply",
//     definition: "The Write Less, Do More, JavaScript Library."
//   }
//  $('span p').definitions( {
//      term : $words
//    })
})

$('.webapps').click(function () {
  $('.container2').hide()
  $('.container3').hide()
  $('.container').show()
})

$('.gis').click(function () {
  $('.container').hide()
  $('.container3').hide()
  $('.container2').show()
})

$('.journalism').click(function () {
  $('.container').hide()
  $('.container2').hide()
  $('.container3').show()
})
