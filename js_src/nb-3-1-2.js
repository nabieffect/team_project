/**
 * Created by Administrator on 2017-07-21.
 */

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=200){
      $('.nb312-title-pic-fixed').addClass('display');
    }

    if(scrollValue<200){
      $('.nb312-title-pic-fixed').removeClass('display');
    }

  });

});