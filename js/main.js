// main.js
$(function(){
  
  // toggle gnb 메뉴
  $('#toggle').click(function(){
    $('.nav_group ').toggleClass('show');
  });

  // SNS bx slider
  var width = $(window).width();  
  (width < 800) ? _minSlides = 2 : _minSlides = 4;
  (width < 800) ? _maxSlides = 2 : _maxSlides = 4;
  console.log(width);

  var settings1 = {
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    slideWidth: 1920,
  };
  var settings2 = {
    minSlides: 2,
    maxSlides: 2,
    moveSlides: 1,
    slideWidth: 1920,
  };

  var slider = $('#sns .slider').bxSlider({
    minSlides: _minSlides,
    maxSlides: _maxSlides,
    moveSlides: 1,
    slideWidth: 1200,
    onSliderResize: function(){
      width = $(window).width();
      console.log(width);
      if(width < 800){
        slider.reloadSlider(settings2);
      } else {
        slider.reloadSlider(settings1);
      }
    }
  })


}); // $end jquery