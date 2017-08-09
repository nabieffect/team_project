/**
 * Created by Administrator on 2017-07-27.
 */

$(window).on('scroll',function(){

  var scrollValue=$(window).scrollTop();

  if(scrollValue >=700){
    $('.title-pic-fixed-nb-4-1').addClass('display');
  }

  if(scrollValue<700){
    $('.title-pic-fixed-nb-4-1').removeClass('display');
  }

});




$(function(){



  $('.googlemap-cover').on('mouseenter',function(){
    $('.googlemap-serch-text').addClass('show-text');
  });

  $('.googlemap-cover').on('mouseleave',function(){
    $('.googlemap-serch-text').removeClass('show-text');
  });


});//끝