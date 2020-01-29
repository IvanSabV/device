$( function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 9000,
      values: [0, 5000],
      step: 10,
      slide: function(event, ui) {
        $("#min").text('от ' + ui.values[0]); 
        $("#max").text('до ' + ui.values[1]); 

        if (ui.handleIndex === 0) {
          $("#min").css('left', ui.handle.style.left);
        } else {
          $("#max").css('left', ui.handle.style.left);
        }
      }
    });

    $("#min").text('от ' + $("#slider-range").slider("values", 0));
    $("#max").text('до ' + $("#slider-range").slider("values", 1));
  } );