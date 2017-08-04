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
/**
 * Created by Administrator on 2017-07-21.
 */

//scrollTop() 현재 스크롤위치(세로)값 반환
//scrollleft() 현재 스크롤위치(가로)값 반환

$(function(){

  $(window).on('scroll',function(){

    var scrollValue=$(window).scrollTop();

    if(scrollValue >=600){
      $('.title-pic-fixed-nb-2-1').addClass('display');
    }

    if(scrollValue<600){
      $('.title-pic-fixed-nb-2-1').removeClass('display');
    }

  });

});//끝






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

    if(scrollValue >=200){
        $('.title-pic-fixed-nb-2-2-2').addClass('display');
    }

    if(scrollValue<200){
        $('.title-pic-fixed-nb-2-2-2').removeClass('display');
    }

});
/**
 * Created by Administrator on 2017-07-27.
 */

$(window).on('scroll',function(){

  var scrollValue=$(window).scrollTop();

  if(scrollValue >=600){
    $('.title-pic-fixed-nb-4-1').addClass('display');
  }

  if(scrollValue<600){
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
    if(scrollValue >=600){
      $('.title-pic-fixed-nb-5-1').addClass('display');
    }

    if(scrollValue<600){
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5iLTEtMS5qcyIsIm5iLTItMS5qcyIsIm5iLTItMi0yLmpzIiwibmItNC0xLmpzIiwibmItNC01LTIuanMiLCJuYi01LTEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTAyLlxyXG4gKi9cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xyXG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTEtMScpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcclxuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi0xLTEnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjEuXG4gKi9cblxuLy9zY3JvbGxUb3AoKSDtmITsnqwg7Iqk7YGs66Gk7JyE7LmYKOyEuOuhnCnqsJIg67CY7ZmYXG4vL3Njcm9sbGxlZnQoKSDtmITsnqwg7Iqk7YGs66Gk7JyE7LmYKOqwgOuhnCnqsJIg67CY7ZmYXG5cbiQoZnVuY3Rpb24oKXtcblxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcblxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTItMScpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XG4gICAgfVxuXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMi0xJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcbiAgICB9XG5cbiAgfSk7XG5cbn0pOy8v64GdXG5cblxuXG5cblxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTI3LlxyXG4gKi9cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAvL+y5tOuTnOyXkCDrp4jsmrDsiqQg7Jik67KE7IucIFvsnpDshLjtnogg67O06riwXSDquIDslKgg67O07J206riwXHJcbiAgICB2YXIgJG5ld3NKYXNlaGkgPSAgJCgnLmNhcmQtY292ZXInKTtcclxuXHJcbiAgICAkbmV3c0phc2VoaS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmphc2VoaScpLmNzcyh7J3Zpc2liaWxpdHknOid2aXNpYmxlJ30pXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbmV3c0phc2VoaS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmphc2VoaScpLmNzcyh7J3Zpc2liaWxpdHknOidoaWRkZW4nfSlcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gIC8vW+yekOyEuO2eiCDrs7TquLBdIO2BtOumreyLnCDsubTrk5wg65Kk7KeR6riwICsg7ZWc67KIIOuNlCDtgbTrpq3si5wg64uk7IucIOuSpOynkeq4sFxyXG4gIC8v65Kk7KeR7Z6I66m07IScIFvsnpDshLjtnojrs7TquLBdIOyXkOyEnCBb6rCE65617Z6IIOuztOq4sF0g66GcIOq4gOyUqCDrsJTqv4hcclxuICAkKCcuamFzZWhpJykuZGF0YSh7J2NsaWNrZWQnOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYoJCh0aGlzKS5kYXRhKCkuY2xpY2tlZCApe1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoKS5zaWJsaW5ncygnLmNhcmQtbmV3cy13cmFwJykuYWRkQ2xhc3MoJ2ZsaXBwZWQnKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHsnY2xpY2tlZCc6ZmFsc2V9KTtcclxuICAgICAgJCh0aGlzKS50ZXh0KCfqsITrnrXtnogg67O06riwJylcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCkuc2libGluZ3MoJy5jYXJkLW5ld3Mtd3JhcCcpLnJlbW92ZUNsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J2NsaWNrZWQnOnRydWV9KTtcclxuICAgICAgJCh0aGlzKS50ZXh0KCfsnpDshLjtnogg67O06riwJylcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4vL2duYiDsiqTtgazroaQgKDIwMHB4KeydtO2bhCDrqZTribTqt7jrprwg6rOg7KCVXHJcblxyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49MjAwKXtcclxuICAgICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTItMi0yJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTwyMDApe1xyXG4gICAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMi0yLTInKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yNy5cbiAqL1xuXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcblxuICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gIGlmKHNjcm9sbFZhbHVlID49NjAwKXtcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtMScpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XG4gIH1cblxuICBpZihzY3JvbGxWYWx1ZTw2MDApe1xuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC0xJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcbiAgfVxuXG59KTtcblxuXG5cblxuJChmdW5jdGlvbigpe1xuXG5cblxuICAkKCcuZ29vZ2xlbWFwLWNvdmVyJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgJCgnLmdvb2dsZW1hcC1zZXJjaC10ZXh0JykuYWRkQ2xhc3MoJ3Nob3ctdGV4dCcpO1xuICB9KTtcblxuICAkKCcuZ29vZ2xlbWFwLWNvdmVyJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgJCgnLmdvb2dsZW1hcC1zZXJjaC10ZXh0JykucmVtb3ZlQ2xhc3MoJ3Nob3ctdGV4dCcpO1xuICB9KTtcblxuXG59KTsvL+uBnSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wMy5cclxuICovXHJcblxyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWUgPj0yMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTUtMicpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZTwyMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTUtMicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZSA+PTIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtNC0yJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlPDIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtNC0yJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlID49MjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC0zLTInKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWU8MjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC0zLTInKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWUgPj0yMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTItMicpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZTwyMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTItMicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZSA+PTIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMicpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZTwyMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi01LTInKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbn0pOyIsIlxuJChmdW5jdGlvbigpe1xuXG5cblxuXG4gIC8v7Y6Y7J207KeAIOygnOuqqSDrsJQ6IOyKpO2BrOuhpOyLnCDqs6DsoJVcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XG5cbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhzY3JvbGxWYWx1ZSk7XG4gICAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi01LTEnKS5hZGRDbGFzcygnZGlzcGxheScpO1xuICAgIH1cblxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XG4gICAgfVxuXG4gIH0pO1xuXG5cblxuXG4gICQoJy5pbWctd3JhcCcpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xuICAgICQodGhpcykuY2hpbGRyZW4oJy5zaXRlLW5hbWUtdGV4dCcpLmFkZENsYXNzKCdzaG93LXRleHQnKTtcbiAgfSk7XG5cbiAgJCgnLmltZy13cmFwJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnNpdGUtbmFtZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ3Nob3ctdGV4dCcpO1xuICB9KTtcblxuXG5cblxuXG5cblxuXG59KTsgLy/rgZ0iXX0=
