/**
 * Created by Administrator on 2017-07-21.
 */

//scrollTop() 현재 스크롤위치(세로)값 반환
//scrollleft() 현재 스크롤위치(가로)값 반환

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=700){
      $('.title-pic-fixed-nb-2-1').addClass('display');
    }

    if(scrollValue<700){
      $('.title-pic-fixed-nb-2-1').removeClass('display');
    }

  });

});//끝





