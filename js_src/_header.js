/**
 * Created by Administrator on 2017-08-16.
 */

$(function(){

  $('.gnb-depth1-link').on('mouseenter', function(){

    var depth1Index = $(this).index('.gnb-depth1-link');
    var motionHeight = 100;

    if( depth1Index == 3 ){
      motionHeight = 230;
    }

    $(this).next('.gnb-depth2').css({'z-index' : 10}).stop().animate({
      height:motionHeight,
      opacity:0.7
    }, 200, function(){

      $(this).parent().siblings().children('.gnb-depth2').stop().animate({
        height:0
      }, 200);
    });
  });

  $('.gnb-depth1-item').on('mouseleave', function(){

    $('.gnb-depth2').stop().animate({
      height:0
    }, 200);
  });

});