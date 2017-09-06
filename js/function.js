/**
 * Created by Administrator on 2017-08-02.
 */


$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=700){
      $('.title-pic-fixed-nb-1-1').addClass('display');
    }

    if(scrollValue<700){
      $('.title-pic-fixed-nb-1-1').removeClass('display');
    }

  });

});
/**
 * Created by Administrator on 2017-09-06.
 */

$(function(){

  var rot1 = 0;
  var rot2 = 0;
  var rot3 = 0;
  var rot4 = 0;
  var rot5 = 0;
  var rot6 = 0;
  var rot7 = 0;
  var rot8 = 0;
  var rot9 = 0;
  var rot10 = 0;

  var wrapNumber = $('.wrapCommon').length;


  setInterval(function(){

    setTimeout(function(){

      rot1 += -120;

      for(var i=0; i<wrapNumber; i++){
        $('.wrapCommon').eq(10*i).css({
          transform : 'translateZ(-91px) rotateY('+ rot1 +'deg)'
        });
      }

    }, 1100);

    setTimeout(function(){

      rot2 += -120;

      for(var i=0; i<wrapNumber; i++){
        $('.wrapCommon').eq(10*i + 1).css({
          transform : 'translateZ(-91px) rotateY('+ rot2 +'deg)'
        });
      }

    }, 1200);

    setTimeout(function(){

      rot3 += -120;

      for(var i=0; i<wrapNumber; i++){
        $('.wrapCommon').eq(10*i + 2).css({
          transform : 'translateZ(-91px) rotateY('+ rot3 +'deg)'
        });
      }

    }, 2000);

    setTimeout(function(){

      rot4 += -120;

      for(var i=0; i<wrapNumber; i++){
        $('.wrapCommon').eq(10*i + 3).css({
          transform : 'translateZ(-91px) rotateY('+ rot4 +'deg)'
        });
      }

    }, 1750);

    setTimeout(function(){

      rot5 += -120;

      for(var i=0; i<wrapNumber; i++){
        $('.wrapCommon').eq(10*i + 4).css({
          transform : 'translateZ(-91px) rotateY('+ rot5 +'deg)'
        });
      }

    }, 1450);

    setTimeout(function(){

      rot6 += -120;

      for(var i=0; i<wrapNumber; i++){
        $('.wrapCommon').eq(10*i + 5).css({
          transform : 'translateZ(-91px) rotateY('+ rot6 +'deg)'
        });
      }

    }, 1150);

    setTimeout(function(){

      rot7 += -120;

      for(var i=0; i<wrapNumber; i++){
        $('.wrapCommon').eq(10*i + 6).css({
          transform : 'translateZ(-91px) rotateY('+ rot7 +'deg)'
        });
      }

    }, 1800);

    setTimeout(function(){

      rot8 += -120;

      for(var i=0; i<wrapNumber; i++){
        $('.wrapCommon').eq(10*i + 7).css({
          transform : 'translateZ(-91px) rotateY('+ rot8 +'deg)'
        });
      }

    }, 850);

    setTimeout(function(){

      rot9 += -120;

      for(var i=0; i<wrapNumber; i++){
        $('.wrapCommon').eq(10*i + 8).css({
          transform : 'translateZ(-91px) rotateY('+ rot9 +'deg)'
        });
      }

    }, 200);

    setTimeout(function(){

      rot10 += -120;

      for(var i=0; i<wrapNumber; i++){
        $('.wrapCommon').eq(10*i + 9).css({
          transform : 'translateZ(-91px) rotateY('+ rot10 +'deg)'
        });
      }

    }, 600);

  }, 3000);



});

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






/**
 * Created by Administrator on 2017-07-21.
 */

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=600){
      $('.nb221-title-pic-fixed').addClass('display');
    }

    if(scrollValue<600){
      $('.nb221-title-pic-fixed').removeClass('display');
    }

  });

});
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
/**
 * Created by Administrator on 2017-07-21.
 */

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=600){
      $('.nb311-title-pic-fixed').addClass('display');
    }

    if(scrollValue<600){
      $('.nb311-title-pic-fixed').removeClass('display');
    }

  });

});
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
/**
 * Created by Administrator on 2017-07-21.
 */

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=600){
      $('.nb321-title-pic-fixed').addClass('display');
    }

    if(scrollValue<600){
      $('.nb321-title-pic-fixed').removeClass('display');
    }

  });

});
/**
 * Created by Administrator on 2017-07-21.
 */

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=200){
      $('.nb322-title-pic-fixed').addClass('display');
    }

    if(scrollValue<200){
      $('.nb322-title-pic-fixed').removeClass('display');
    }

  });

});
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
/**
 * Created by Administrator on 2017-07-21.
 */

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=600){
      $('.nb421-title-pic-fixed').addClass('display');
    }

    if(scrollValue<600){
      $('.nb421-title-pic-fixed').removeClass('display');
    }

  });

});
/**
 * Created by Administrator on 2017-07-21.
 */

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=600){
      $('.nb431-title-pic-fixed').addClass('display');
    }

    if(scrollValue<600){
      $('.nb431-title-pic-fixed').removeClass('display');
    }

  });

});
/**
 * Created by Administrator on 2017-07-21.
 */

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=600){
      $('.nb441-title-pic-fixed').addClass('display');
    }

    if(scrollValue<600){
      $('.nb441-title-pic-fixed').removeClass('display');
    }

  });

});
/**
 * Created by Administrator on 2017-07-21.
 */

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=600){
      $('.nb451-title-pic-fixed').addClass('display');
    }

    if(scrollValue<600){
      $('.nb451-title-pic-fixed').removeClass('display');
    }

  });

});
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

$(function(){




  //페이지 제목 바: 스크롤시 고정
  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    //console.log(scrollValue);
    if(scrollValue >=700){
      $('.title-pic-fixed-nb-5-1').addClass('display');
    }

    if(scrollValue<700){
      $('.title-pic-fixed-nb-5-1').removeClass('display');
    }

  });




  $('.img-wrap').on('mouseenter',function(){
    $(this).children('.site-name-text').addClass('show-text');
  });

  $('.img-wrap').on('mouseleave',function(){
    $(this).children('.site-name-text').removeClass('show-text');
  });








}); //끝
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5iLTEtMS5qcyIsIm5iLTEuanMiLCJuYi0yLTEuanMiLCJuYi0yLTItMS5qcyIsIm5iLTItMi0yLmpzIiwibmItMy0xLTEuanMiLCJuYi0zLTEtMi5qcyIsIm5iLTMtMi0xLmpzIiwibmItMy0yLTIuanMiLCJuYi00LTEuanMiLCJuYi00LTItMS5qcyIsIm5iLTQtMy0xLmpzIiwibmItNC00LTEuanMiLCJuYi00LTUtMS5qcyIsIm5iLTQtNS0yLmpzIiwibmItNS0xLmpzIiwiX2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDIuXHJcbiAqL1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTcwMCl7XHJcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMS0xJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTw3MDApe1xyXG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTEtMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA5LTA2LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHJvdDEgPSAwO1xyXG4gIHZhciByb3QyID0gMDtcclxuICB2YXIgcm90MyA9IDA7XHJcbiAgdmFyIHJvdDQgPSAwO1xyXG4gIHZhciByb3Q1ID0gMDtcclxuICB2YXIgcm90NiA9IDA7XHJcbiAgdmFyIHJvdDcgPSAwO1xyXG4gIHZhciByb3Q4ID0gMDtcclxuICB2YXIgcm90OSA9IDA7XHJcbiAgdmFyIHJvdDEwID0gMDtcclxuXHJcbiAgdmFyIHdyYXBOdW1iZXIgPSAkKCcud3JhcENvbW1vbicpLmxlbmd0aDtcclxuXHJcblxyXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgcm90MSArPSAtMTIwO1xyXG5cclxuICAgICAgZm9yKHZhciBpPTA7IGk8d3JhcE51bWJlcjsgaSsrKXtcclxuICAgICAgICAkKCcud3JhcENvbW1vbicpLmVxKDEwKmkpLmNzcyh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0gOiAndHJhbnNsYXRlWigtOTFweCkgcm90YXRlWSgnKyByb3QxICsnZGVnKSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sIDExMDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHJvdDIgKz0gLTEyMDtcclxuXHJcbiAgICAgIGZvcih2YXIgaT0wOyBpPHdyYXBOdW1iZXI7IGkrKyl7XHJcbiAgICAgICAgJCgnLndyYXBDb21tb24nKS5lcSgxMCppICsgMSkuY3NzKHtcclxuICAgICAgICAgIHRyYW5zZm9ybSA6ICd0cmFuc2xhdGVaKC05MXB4KSByb3RhdGVZKCcrIHJvdDIgKydkZWcpJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgMTIwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgcm90MyArPSAtMTIwO1xyXG5cclxuICAgICAgZm9yKHZhciBpPTA7IGk8d3JhcE51bWJlcjsgaSsrKXtcclxuICAgICAgICAkKCcud3JhcENvbW1vbicpLmVxKDEwKmkgKyAyKS5jc3Moe1xyXG4gICAgICAgICAgdHJhbnNmb3JtIDogJ3RyYW5zbGF0ZVooLTkxcHgpIHJvdGF0ZVkoJysgcm90MyArJ2RlZyknXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCAyMDAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICByb3Q0ICs9IC0xMjA7XHJcblxyXG4gICAgICBmb3IodmFyIGk9MDsgaTx3cmFwTnVtYmVyOyBpKyspe1xyXG4gICAgICAgICQoJy53cmFwQ29tbW9uJykuZXEoMTAqaSArIDMpLmNzcyh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0gOiAndHJhbnNsYXRlWigtOTFweCkgcm90YXRlWSgnKyByb3Q0ICsnZGVnKSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sIDE3NTApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHJvdDUgKz0gLTEyMDtcclxuXHJcbiAgICAgIGZvcih2YXIgaT0wOyBpPHdyYXBOdW1iZXI7IGkrKyl7XHJcbiAgICAgICAgJCgnLndyYXBDb21tb24nKS5lcSgxMCppICsgNCkuY3NzKHtcclxuICAgICAgICAgIHRyYW5zZm9ybSA6ICd0cmFuc2xhdGVaKC05MXB4KSByb3RhdGVZKCcrIHJvdDUgKydkZWcpJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgMTQ1MCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgcm90NiArPSAtMTIwO1xyXG5cclxuICAgICAgZm9yKHZhciBpPTA7IGk8d3JhcE51bWJlcjsgaSsrKXtcclxuICAgICAgICAkKCcud3JhcENvbW1vbicpLmVxKDEwKmkgKyA1KS5jc3Moe1xyXG4gICAgICAgICAgdHJhbnNmb3JtIDogJ3RyYW5zbGF0ZVooLTkxcHgpIHJvdGF0ZVkoJysgcm90NiArJ2RlZyknXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCAxMTUwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICByb3Q3ICs9IC0xMjA7XHJcblxyXG4gICAgICBmb3IodmFyIGk9MDsgaTx3cmFwTnVtYmVyOyBpKyspe1xyXG4gICAgICAgICQoJy53cmFwQ29tbW9uJykuZXEoMTAqaSArIDYpLmNzcyh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0gOiAndHJhbnNsYXRlWigtOTFweCkgcm90YXRlWSgnKyByb3Q3ICsnZGVnKSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sIDE4MDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHJvdDggKz0gLTEyMDtcclxuXHJcbiAgICAgIGZvcih2YXIgaT0wOyBpPHdyYXBOdW1iZXI7IGkrKyl7XHJcbiAgICAgICAgJCgnLndyYXBDb21tb24nKS5lcSgxMCppICsgNykuY3NzKHtcclxuICAgICAgICAgIHRyYW5zZm9ybSA6ICd0cmFuc2xhdGVaKC05MXB4KSByb3RhdGVZKCcrIHJvdDggKydkZWcpJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgODUwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICByb3Q5ICs9IC0xMjA7XHJcblxyXG4gICAgICBmb3IodmFyIGk9MDsgaTx3cmFwTnVtYmVyOyBpKyspe1xyXG4gICAgICAgICQoJy53cmFwQ29tbW9uJykuZXEoMTAqaSArIDgpLmNzcyh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0gOiAndHJhbnNsYXRlWigtOTFweCkgcm90YXRlWSgnKyByb3Q5ICsnZGVnKSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sIDIwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgcm90MTAgKz0gLTEyMDtcclxuXHJcbiAgICAgIGZvcih2YXIgaT0wOyBpPHdyYXBOdW1iZXI7IGkrKyl7XHJcbiAgICAgICAgJCgnLndyYXBDb21tb24nKS5lcSgxMCppICsgOSkuY3NzKHtcclxuICAgICAgICAgIHRyYW5zZm9ybSA6ICd0cmFuc2xhdGVaKC05MXB4KSByb3RhdGVZKCcrIHJvdDEwICsnZGVnKSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sIDYwMCk7XHJcblxyXG4gIH0sIDMwMDApO1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTIxLlxyXG4gKi9cclxuXHJcbi8vc2Nyb2xsVG9wKCkg7ZiE7J6sIOyKpO2BrOuhpOychOy5mCjshLjroZwp6rCSIOuwmO2ZmFxyXG4vL3Njcm9sbGxlZnQoKSDtmITsnqwg7Iqk7YGs66Gk7JyE7LmYKOqwgOuhnCnqsJIg67CY7ZmYXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWUgPj03MDApe1xyXG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTItMScpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8NzAwKXtcclxuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi0yLTEnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOy8v64GdXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTIxLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XHJcbiAgICAgICQoJy5uYjIyMS10aXRsZS1waWMtZml4ZWQnKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XHJcbiAgICAgICQoJy5uYjIyMS10aXRsZS1waWMtZml4ZWQnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yNy5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgLy/subTrk5zsl5Ag66eI7Jqw7IqkIOyYpOuyhOyLnCBb7J6Q7IS47Z6IIOuztOq4sF0g6riA7JSoIOuztOydtOq4sFxyXG4gICAgdmFyICRuZXdzSmFzZWhpID0gICQoJy5jYXJkLWNvdmVyJyk7XHJcblxyXG4gICAgJG5ld3NKYXNlaGkub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykuY2hpbGRyZW4oJy5qYXNlaGknKS5jc3Moeyd2aXNpYmlsaXR5JzondmlzaWJsZSd9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgJG5ld3NKYXNlaGkub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykuY2hpbGRyZW4oJy5qYXNlaGknKS5jc3Moeyd2aXNpYmlsaXR5JzonaGlkZGVuJ30pXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAvL1vsnpDshLjtnogg67O06riwXSDtgbTrpq3si5wg7Lm065OcIOuSpOynkeq4sCArIO2VnOuyiCDrjZQg7YG066at7IucIOuLpOyLnCDrkqTsp5HquLBcclxuICAvL+uSpOynke2eiOuptOyEnCBb7J6Q7IS47Z6I67O06riwXSDsl5DshJwgW+qwhOuete2eiCDrs7TquLBdIOuhnCDquIDslKgg67CU6r+IXHJcbiAgJCgnLmphc2VoaScpLmRhdGEoeydjbGlja2VkJzp0cnVlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmKCQodGhpcykuZGF0YSgpLmNsaWNrZWQgKXtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCkuc2libGluZ3MoJy5jYXJkLW5ld3Mtd3JhcCcpLmFkZENsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J2NsaWNrZWQnOmZhbHNlfSk7XHJcbiAgICAgICQodGhpcykudGV4dCgn6rCE65617Z6IIOuztOq4sCcpXHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICQodGhpcykucGFyZW50cygpLnNpYmxpbmdzKCcuY2FyZC1uZXdzLXdyYXAnKS5yZW1vdmVDbGFzcygnZmxpcHBlZCcpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydjbGlja2VkJzp0cnVlfSk7XHJcbiAgICAgICQodGhpcykudGV4dCgn7J6Q7IS47Z6IIOuztOq4sCcpXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuLy9nbmIg7Iqk7YGs66GkICgyMDBweCnsnbTtm4Qg66mU64m06re466a8IOqzoOyglVxyXG5cclxuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTEwMCl7XHJcbiAgICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi0yLTItMicpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8MTAwKXtcclxuICAgICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTItMi0yJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yMS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xyXG4gICAgICAkKCcubmIzMTEtdGl0bGUtcGljLWZpeGVkJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTw2MDApe1xyXG4gICAgICAkKCcubmIzMTEtdGl0bGUtcGljLWZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49MjAwKXtcclxuICAgICAgJCgnLm5iMzEyLXRpdGxlLXBpYy1maXhlZCcpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8MjAwKXtcclxuICAgICAgJCgnLm5iMzEyLXRpdGxlLXBpYy1maXhlZCcpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTIxLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XHJcbiAgICAgICQoJy5uYjMyMS10aXRsZS1waWMtZml4ZWQnKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XHJcbiAgICAgICQoJy5uYjMyMS10aXRsZS1waWMtZml4ZWQnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yMS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWUgPj0yMDApe1xyXG4gICAgICAkKCcubmIzMjItdGl0bGUtcGljLWZpeGVkJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTwyMDApe1xyXG4gICAgICAkKCcubmIzMjItdGl0bGUtcGljLWZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjcuXHJcbiAqL1xyXG5cclxuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlID49NzAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC0xJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlPDcwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuXHJcbiAgJCgnLmdvb2dsZW1hcC1jb3ZlcicpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgJCgnLmdvb2dsZW1hcC1zZXJjaC10ZXh0JykuYWRkQ2xhc3MoJ3Nob3ctdGV4dCcpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZ29vZ2xlbWFwLWNvdmVyJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZ29vZ2xlbWFwLXNlcmNoLXRleHQnKS5yZW1vdmVDbGFzcygnc2hvdy10ZXh0Jyk7XHJcbiAgfSk7XHJcblxyXG5cclxufSk7Ly/rgZ0iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49NjAwKXtcclxuICAgICAgJCgnLm5iNDIxLXRpdGxlLXBpYy1maXhlZCcpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcclxuICAgICAgJCgnLm5iNDIxLXRpdGxlLXBpYy1maXhlZCcpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTIxLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XHJcbiAgICAgICQoJy5uYjQzMS10aXRsZS1waWMtZml4ZWQnKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XHJcbiAgICAgICQoJy5uYjQzMS10aXRsZS1waWMtZml4ZWQnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yMS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xyXG4gICAgICAkKCcubmI0NDEtdGl0bGUtcGljLWZpeGVkJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTw2MDApe1xyXG4gICAgICAkKCcubmI0NDEtdGl0bGUtcGljLWZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49NjAwKXtcclxuICAgICAgJCgnLm5iNDUxLXRpdGxlLXBpYy1maXhlZCcpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcclxuICAgICAgJCgnLm5iNDUxLXRpdGxlLXBpYy1maXhlZCcpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTAzLlxyXG4gKi9cclxuXHJcbiQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICBpZihzY3JvbGxWYWx1ZSA+PTIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtNS0yJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlPDIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtNS0yJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlID49MjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC00LTInKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWU8MjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC00LTInKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWUgPj0yMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTMtMicpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZTwyMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTMtMicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZSA+PTIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtMi0yJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlPDIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtMi0yJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlID49MjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNS0yJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlPDIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxufSk7IiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG5cclxuXHJcbiAgLy/tjpjsnbTsp4Ag7KCc66qpIOuwlDog7Iqk7YGs66Gk7IucIOqzoOyglVxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhzY3JvbGxWYWx1ZSk7XHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTcwMCl7XHJcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNS0xJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTw3MDApe1xyXG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAkKCcuaW1nLXdyYXAnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5zaXRlLW5hbWUtdGV4dCcpLmFkZENsYXNzKCdzaG93LXRleHQnKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmltZy13cmFwJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc2l0ZS1uYW1lLXRleHQnKS5yZW1vdmVDbGFzcygnc2hvdy10ZXh0Jyk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7IC8v64GdIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE2LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgZGVwdGgxSW5kZXggPSAkKHRoaXMpLmluZGV4KCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgbW90aW9uSGVpZ2h0ID0gMTAwO1xyXG5cclxuICAgIGlmKCBkZXB0aDFJbmRleCA9PSAzICl7XHJcbiAgICAgIG1vdGlvbkhlaWdodCA9IDIzMDtcclxuICAgIH1cclxuXHJcbiAgICAkKHRoaXMpLm5leHQoJy5nbmItZGVwdGgyJykuY3NzKHsnei1pbmRleCcgOiAxMH0pLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0Om1vdGlvbkhlaWdodCxcclxuICAgICAgb3BhY2l0eTowLjdcclxuICAgIH0sIDIwMCwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmduYi1kZXB0aDInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0OjBcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMS1pdGVtJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5nbmItZGVwdGgyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQ6MFxyXG4gICAgfSwgMjAwKTtcclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
