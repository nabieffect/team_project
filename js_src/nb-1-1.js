/**
 * Created by Administrator on 2017-08-02.
 */


$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=600){
      $('.title-pic-fixed-nb-1-1').addClass('display');
    }

    if(scrollValue<600){
      $('.title-pic-fixed-nb-1-1').removeClass('display');
    }

  });

});