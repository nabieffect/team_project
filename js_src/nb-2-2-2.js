/**
 * Created by Administrator on 2017-07-27.
 */


$(function(){


  //카드에 마우스 오버시 [자세히 보기] 글씨 보이기
    var $newsJasehi =  $('.card-cover');

    $newsJasehi.on('mouseenter',function(){
      $(this).children('.jasehi').css({'visibility':'visible'})
    });

    $newsJasehi.on('mouseleave',function(){
      $(this).children('.jasehi').css({'visibility':'hidden'})
    });



  //[자세히 보기] 클릭시 카드 뒤집기 + 한번 더 클릭시 다시 뒤집기
  //뒤집히면서 [자세히보기] 에서 [간략히 보기] 로 글씨 바꿈
  $('.jasehi').data({'clicked':true}).on('click',function(){

    if($(this).data().clicked ){
      $(this).parents().siblings('.card-news-wrap').addClass('flipped');
      $(this).data({'clicked':false});
      $(this).text('간략히 보기')

    }else{
      $(this).parents().siblings('.card-news-wrap').removeClass('flipped');
      $(this).data({'clicked':true});
      $(this).text('자세히 보기')
    }
  });






});

//gnb 스크롤 (200px)이후 메뉴그림 고정

$(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=100){
        $('.title-pic-fixed-nb-2-2-2').addClass('display');
    }

    if(scrollValue<100){
        $('.title-pic-fixed-nb-2-2-2').removeClass('display');
    }

});