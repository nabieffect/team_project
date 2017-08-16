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

    if(scrollValue >=600){
      $('.nb321-title-pic-fixed').addClass('display');
    }

    if(scrollValue<600){
      $('.nb321-title-pic-fixed').removeClass('display');
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

  $('.gnb-depth1-link').on('mouseleave', function(){

    $('.gnb-depth2').stop().animate({
      height:0
    }, 200);
  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5iLTEtMS5qcyIsIm5iLTItMS5qcyIsIm5iLTItMi0xLmpzIiwibmItMi0yLTIuanMiLCJuYi0zLTEtMS5qcyIsIm5iLTMtMi0xLmpzIiwibmItNC0xLmpzIiwibmItNC0yLTEuanMiLCJuYi00LTMtMS5qcyIsIm5iLTQtNC0xLmpzIiwibmItNC01LTEuanMiLCJuYi00LTUtMi5qcyIsIm5iLTUtMS5qcyIsIl9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wMi5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49NzAwKXtcclxuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi0xLTEnKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlPDcwMCl7XHJcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMS0xJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjEuXHJcbiAqL1xyXG5cclxuLy9zY3JvbGxUb3AoKSDtmITsnqwg7Iqk7YGs66Gk7JyE7LmYKOyEuOuhnCnqsJIg67CY7ZmYXHJcbi8vc2Nyb2xsbGVmdCgpIO2YhOyerCDsiqTtgazroaTsnITsuZgo6rCA66GcKeqwkiDrsJjtmZhcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTcwMCl7XHJcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMi0xJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTw3MDApe1xyXG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTItMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Ly/rgZ1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49NjAwKXtcclxuICAgICAgJCgnLm5iMjIxLXRpdGxlLXBpYy1maXhlZCcpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcclxuICAgICAgJCgnLm5iMjIxLXRpdGxlLXBpYy1maXhlZCcpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTI3LlxyXG4gKi9cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAvL+y5tOuTnOyXkCDrp4jsmrDsiqQg7Jik67KE7IucIFvsnpDshLjtnogg67O06riwXSDquIDslKgg67O07J206riwXHJcbiAgICB2YXIgJG5ld3NKYXNlaGkgPSAgJCgnLmNhcmQtY292ZXInKTtcclxuXHJcbiAgICAkbmV3c0phc2VoaS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmphc2VoaScpLmNzcyh7J3Zpc2liaWxpdHknOid2aXNpYmxlJ30pXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbmV3c0phc2VoaS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmphc2VoaScpLmNzcyh7J3Zpc2liaWxpdHknOidoaWRkZW4nfSlcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gIC8vW+yekOyEuO2eiCDrs7TquLBdIO2BtOumreyLnCDsubTrk5wg65Kk7KeR6riwICsg7ZWc67KIIOuNlCDtgbTrpq3si5wg64uk7IucIOuSpOynkeq4sFxyXG4gIC8v65Kk7KeR7Z6I66m07IScIFvsnpDshLjtnojrs7TquLBdIOyXkOyEnCBb6rCE65617Z6IIOuztOq4sF0g66GcIOq4gOyUqCDrsJTqv4hcclxuICAkKCcuamFzZWhpJykuZGF0YSh7J2NsaWNrZWQnOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYoJCh0aGlzKS5kYXRhKCkuY2xpY2tlZCApe1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoKS5zaWJsaW5ncygnLmNhcmQtbmV3cy13cmFwJykuYWRkQ2xhc3MoJ2ZsaXBwZWQnKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHsnY2xpY2tlZCc6ZmFsc2V9KTtcclxuICAgICAgJCh0aGlzKS50ZXh0KCfqsITrnrXtnogg67O06riwJylcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCkuc2libGluZ3MoJy5jYXJkLW5ld3Mtd3JhcCcpLnJlbW92ZUNsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J2NsaWNrZWQnOnRydWV9KTtcclxuICAgICAgJCh0aGlzKS50ZXh0KCfsnpDshLjtnogg67O06riwJylcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4vL2duYiDsiqTtgazroaQgKDIwMHB4KeydtO2bhCDrqZTribTqt7jrprwg6rOg7KCVXHJcblxyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49MTAwKXtcclxuICAgICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTItMi0yJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTwxMDApe1xyXG4gICAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMi0yLTInKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTIxLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XHJcbiAgICAgICQoJy5uYjMxMS10aXRsZS1waWMtZml4ZWQnKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XHJcbiAgICAgICQoJy5uYjMxMS10aXRsZS1waWMtZml4ZWQnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yMS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xyXG4gICAgICAkKCcubmIzMjEtdGl0bGUtcGljLWZpeGVkJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTw2MDApe1xyXG4gICAgICAkKCcubmIzMjEtdGl0bGUtcGljLWZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjcuXHJcbiAqL1xyXG5cclxuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlID49NzAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC0xJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlPDcwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuXHJcbiAgJCgnLmdvb2dsZW1hcC1jb3ZlcicpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgJCgnLmdvb2dsZW1hcC1zZXJjaC10ZXh0JykuYWRkQ2xhc3MoJ3Nob3ctdGV4dCcpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZ29vZ2xlbWFwLWNvdmVyJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZ29vZ2xlbWFwLXNlcmNoLXRleHQnKS5yZW1vdmVDbGFzcygnc2hvdy10ZXh0Jyk7XHJcbiAgfSk7XHJcblxyXG5cclxufSk7Ly/rgZ0iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49NjAwKXtcclxuICAgICAgJCgnLm5iNDIxLXRpdGxlLXBpYy1maXhlZCcpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcclxuICAgICAgJCgnLm5iNDIxLXRpdGxlLXBpYy1maXhlZCcpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTIxLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XHJcbiAgICAgICQoJy5uYjQzMS10aXRsZS1waWMtZml4ZWQnKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XHJcbiAgICAgICQoJy5uYjQzMS10aXRsZS1waWMtZml4ZWQnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yMS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xyXG4gICAgICAkKCcubmI0NDEtdGl0bGUtcGljLWZpeGVkJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTw2MDApe1xyXG4gICAgICAkKCcubmI0NDEtdGl0bGUtcGljLWZpeGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49NjAwKXtcclxuICAgICAgJCgnLm5iNDUxLXRpdGxlLXBpYy1maXhlZCcpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcclxuICAgICAgJCgnLm5iNDUxLXRpdGxlLXBpYy1maXhlZCcpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTAzLlxyXG4gKi9cclxuXHJcbiQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICBpZihzY3JvbGxWYWx1ZSA+PTIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtNS0yJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlPDIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtNS0yJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlID49MjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC00LTInKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWU8MjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC00LTInKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWUgPj0yMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTMtMicpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZTwyMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTMtMicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZSA+PTIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtMi0yJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlPDIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtMi0yJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlID49MjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNS0yJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlPDIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxufSk7IiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG5cclxuXHJcbiAgLy/tjpjsnbTsp4Ag7KCc66qpIOuwlDog7Iqk7YGs66Gk7IucIOqzoOyglVxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhzY3JvbGxWYWx1ZSk7XHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTcwMCl7XHJcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNS0xJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTw3MDApe1xyXG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAkKCcuaW1nLXdyYXAnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5zaXRlLW5hbWUtdGV4dCcpLmFkZENsYXNzKCdzaG93LXRleHQnKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmltZy13cmFwJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc2l0ZS1uYW1lLXRleHQnKS5yZW1vdmVDbGFzcygnc2hvdy10ZXh0Jyk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7IC8v64GdIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE2LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgZGVwdGgxSW5kZXggPSAkKHRoaXMpLmluZGV4KCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgbW90aW9uSGVpZ2h0ID0gMTAwO1xyXG5cclxuICAgIGlmKCBkZXB0aDFJbmRleCA9PSAzICl7XHJcbiAgICAgIG1vdGlvbkhlaWdodCA9IDIzMDtcclxuICAgIH1cclxuXHJcbiAgICAkKHRoaXMpLm5leHQoJy5nbmItZGVwdGgyJykuY3NzKHsnei1pbmRleCcgOiAxMH0pLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0Om1vdGlvbkhlaWdodCxcclxuICAgICAgb3BhY2l0eTowLjdcclxuICAgIH0sIDIwMCwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmduYi1kZXB0aDInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0OjBcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMS1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5nbmItZGVwdGgyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQ6MFxyXG4gICAgfSwgMjAwKTtcclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
