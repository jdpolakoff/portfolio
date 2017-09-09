

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
       randomStrokeColor: true,
       strokeColorMin: 0,
       strokeColorMax: 15,
       paralax: true,
       density: 12000,
       maxSpeedX: .7,
       maxSpeedY: .5,
       lineWidth: 2,
       particleRadius: 5,
       proximity: 100
})
})
