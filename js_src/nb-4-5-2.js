/**
 * Created by Administrator on 2017-08-03.
 */

$(window).on('scroll',function(){

  var scrollValue=$(window).scrollTop();

  if(scrollValue >=200){
    $('.title-pic-fixed-nb-4-5-2').addClass('display');
  }

  if(scrollValue<200){
    $('.title-pic-fixed-nb-4-5-2').removeClass('display');
  }

  if(scrollValue >=200){
    $('.title-pic-fixed-nb-4-4-2').addClass('display');
  }

  if(scrollValue<200){
    $('.title-pic-fixed-nb-4-4-2').removeClass('display');
  }

  if(scrollValue >=200){
    $('.title-pic-fixed-nb-4-3-2').addClass('display');
  }

  if(scrollValue<200){
    $('.title-pic-fixed-nb-4-3-2').removeClass('display');
  }

  if(scrollValue >=200){
    $('.title-pic-fixed-nb-4-2-2').addClass('display');
  }

  if(scrollValue<200){
    $('.title-pic-fixed-nb-4-2-2').removeClass('display');
  }

  if(scrollValue >=200){
    $('.title-pic-fixed-nb-5-2').addClass('display');
  }

  if(scrollValue<200){
    $('.title-pic-fixed-nb-5-2').removeClass('display');
  }

});