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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5iLTEtMS5qcyIsIm5iLTItMS5qcyIsIm5iLTItMi0yLmpzIiwibmItNC0xLmpzIiwibmItNC01LTIuanMiLCJuYi01LTEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTAyLlxyXG4gKi9cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xyXG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTEtMScpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcclxuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi0xLTEnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yMS5cclxuICovXHJcblxyXG4vL3Njcm9sbFRvcCgpIO2YhOyerCDsiqTtgazroaTsnITsuZgo7IS466GcKeqwkiDrsJjtmZhcclxuLy9zY3JvbGxsZWZ0KCkg7ZiE7J6sIOyKpO2BrOuhpOychOy5mCjqsIDroZwp6rCSIOuwmO2ZmFxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49NjAwKXtcclxuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi0yLTEnKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XHJcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMi0xJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsvL+uBnVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yNy5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgLy/subTrk5zsl5Ag66eI7Jqw7IqkIOyYpOuyhOyLnCBb7J6Q7IS47Z6IIOuztOq4sF0g6riA7JSoIOuztOydtOq4sFxyXG4gICAgdmFyICRuZXdzSmFzZWhpID0gICQoJy5jYXJkLWNvdmVyJyk7XHJcblxyXG4gICAgJG5ld3NKYXNlaGkub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykuY2hpbGRyZW4oJy5qYXNlaGknKS5jc3Moeyd2aXNpYmlsaXR5JzondmlzaWJsZSd9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgJG5ld3NKYXNlaGkub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykuY2hpbGRyZW4oJy5qYXNlaGknKS5jc3Moeyd2aXNpYmlsaXR5JzonaGlkZGVuJ30pXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAvL1vsnpDshLjtnogg67O06riwXSDtgbTrpq3si5wg7Lm065OcIOuSpOynkeq4sCArIO2VnOuyiCDrjZQg7YG066at7IucIOuLpOyLnCDrkqTsp5HquLBcclxuICAvL+uSpOynke2eiOuptOyEnCBb7J6Q7IS47Z6I67O06riwXSDsl5DshJwgW+qwhOuete2eiCDrs7TquLBdIOuhnCDquIDslKgg67CU6r+IXHJcbiAgJCgnLmphc2VoaScpLmRhdGEoeydjbGlja2VkJzp0cnVlfSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmKCQodGhpcykuZGF0YSgpLmNsaWNrZWQgKXtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCkuc2libGluZ3MoJy5jYXJkLW5ld3Mtd3JhcCcpLmFkZENsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J2NsaWNrZWQnOmZhbHNlfSk7XHJcbiAgICAgICQodGhpcykudGV4dCgn6rCE65617Z6IIOuztOq4sCcpXHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICQodGhpcykucGFyZW50cygpLnNpYmxpbmdzKCcuY2FyZC1uZXdzLXdyYXAnKS5yZW1vdmVDbGFzcygnZmxpcHBlZCcpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydjbGlja2VkJzp0cnVlfSk7XHJcbiAgICAgICQodGhpcykudGV4dCgn7J6Q7IS47Z6IIOuztOq4sCcpXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuLy9nbmIg7Iqk7YGs66GkICgyMDBweCnsnbTtm4Qg66mU64m06re466a8IOqzoOyglVxyXG5cclxuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTIwMCl7XHJcbiAgICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi0yLTItMicpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8MjAwKXtcclxuICAgICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTItMi0yJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yNy5cclxuICovXHJcblxyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTEnKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC0xJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG5cclxuICAkKCcuZ29vZ2xlbWFwLWNvdmVyJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZ29vZ2xlbWFwLXNlcmNoLXRleHQnKS5hZGRDbGFzcygnc2hvdy10ZXh0Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5nb29nbGVtYXAtY292ZXInKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICQoJy5nb29nbGVtYXAtc2VyY2gtdGV4dCcpLnJlbW92ZUNsYXNzKCdzaG93LXRleHQnKTtcclxuICB9KTtcclxuXHJcblxyXG59KTsvL+uBnSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wMy5cclxuICovXHJcblxyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWUgPj0yMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTUtMicpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZTwyMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTUtMicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZSA+PTIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtNC0yJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlPDIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtNC0yJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICB9XHJcblxyXG4gIGlmKHNjcm9sbFZhbHVlID49MjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC0zLTInKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWU8MjAwKXtcclxuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC0zLTInKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbiAgaWYoc2Nyb2xsVmFsdWUgPj0yMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTItMicpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZTwyMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTItMicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZSA+PTIwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMicpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZTwyMDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi01LTInKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbn0pOyIsIlxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuXHJcblxyXG4gIC8v7Y6Y7J207KeAIOygnOuqqSDrsJQ6IOyKpO2BrOuhpOyLnCDqs6DsoJVcclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coc2Nyb2xsVmFsdWUpO1xyXG4gICAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xyXG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMScpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcclxuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi01LTEnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgJCgnLmltZy13cmFwJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc2l0ZS1uYW1lLXRleHQnKS5hZGRDbGFzcygnc2hvdy10ZXh0Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5pbWctd3JhcCcpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnNpdGUtbmFtZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ3Nob3ctdGV4dCcpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pOyAvL+uBnSJdfQ==
