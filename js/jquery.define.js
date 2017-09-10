(function( $ ) {

  $.fn.definitions = function( options ) {

    var settings = $.extend({
      // TODO add additional options - future
    }, options );

    var count = 0

    return this.each(function() {
      var _results = [];
      var _term = options['term'];
      var _this = $(this);

      if (_term.length > 1) {
        $.each(_term, (function() {

          for (key in _term) {
            var val = _term[key];

            _results.push(_this.html(function(_, html) {
              if (_this.text().toUpperCase().indexOf(val['word'].toUpperCase()) >= 0) {
                return html = define_replace(val['word'], val['definition'], html);
              }
            }));
          }
        }));
      } else {
        _results.push(_this.html(function(_, html) {
          if (_this.text().toUpperCase().indexOf(_term['word'].toUpperCase()) >= 0) {
            return html = define_replace(_term['word'], _term['definition'], html);
          }
        }));
      }

    });

  }

  var define_replace = function(word, def, html) {
    var re;
    return html.replace(" " + word + " ", " <span class=\"definition\">" + word + "<span class=\"definition_tooltip\">" + def + "</span></span> ", "gi");
  }
}( jQuery ));
