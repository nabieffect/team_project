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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5iLTEtMS5qcyIsIm5iLTItMS5qcyIsIm5iLTItMi0yLmpzIiwibmItNC0xLmpzIiwibmItNS0xLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wMi5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49NjAwKXtcclxuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi0xLTEnKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XHJcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMS0xJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTIxLlxuICovXG5cbi8vc2Nyb2xsVG9wKCkg7ZiE7J6sIOyKpO2BrOuhpOychOy5mCjshLjroZwp6rCSIOuwmO2ZmFxuLy9zY3JvbGxsZWZ0KCkg7ZiE7J6sIOyKpO2BrOuhpOychOy5mCjqsIDroZwp6rCSIOuwmO2ZmFxuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XG5cbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi0yLTEnKS5hZGRDbGFzcygnZGlzcGxheScpO1xuICAgIH1cblxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTItMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XG4gICAgfVxuXG4gIH0pO1xuXG59KTsvL+uBnVxuXG5cblxuXG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjcuXG4gKi9cblxuXG4kKGZ1bmN0aW9uKCl7XG5cblxuICAvL+y5tOuTnOyXkCDrp4jsmrDsiqQg7Jik67KE7IucIFvsnpDshLjtnogg67O06riwXSDquIDslKgg67O07J206riwXG4gICAgdmFyICRuZXdzSmFzZWhpID0gICQoJy5jYXJkLWNvdmVyJyk7XG5cbiAgICAkbmV3c0phc2VoaS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykuY2hpbGRyZW4oJy5qYXNlaGknKS5jc3Moeyd2aXNpYmlsaXR5JzondmlzaWJsZSd9KVxuICAgIH0pO1xuXG4gICAgJG5ld3NKYXNlaGkub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuamFzZWhpJykuY3NzKHsndmlzaWJpbGl0eSc6J2hpZGRlbid9KVxuICAgIH0pO1xuXG5cblxuICAvL1vsnpDshLjtnogg67O06riwXSDtgbTrpq3si5wg7Lm065OcIOuSpOynkeq4sCArIO2VnOuyiCDrjZQg7YG066at7IucIOuLpOyLnCDrkqTsp5HquLBcbiAgLy/rkqTsp5HtnojrqbTshJwgW+yekOyEuO2eiOuztOq4sF0g7JeQ7IScIFvqsITrnrXtnogg67O06riwXSDroZwg6riA7JSoIOuwlOq/iFxuICAkKCcuamFzZWhpJykuZGF0YSh7J2NsaWNrZWQnOnRydWV9KS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG5cbiAgICBpZigkKHRoaXMpLmRhdGEoKS5jbGlja2VkICl7XG4gICAgICAkKHRoaXMpLnBhcmVudHMoKS5zaWJsaW5ncygnLmNhcmQtbmV3cy13cmFwJykuYWRkQ2xhc3MoJ2ZsaXBwZWQnKTtcbiAgICAgICQodGhpcykuZGF0YSh7J2NsaWNrZWQnOmZhbHNlfSk7XG4gICAgICAkKHRoaXMpLnRleHQoJ+qwhOuete2eiCDrs7TquLAnKVxuXG4gICAgfWVsc2V7XG4gICAgICAkKHRoaXMpLnBhcmVudHMoKS5zaWJsaW5ncygnLmNhcmQtbmV3cy13cmFwJykucmVtb3ZlQ2xhc3MoJ2ZsaXBwZWQnKTtcbiAgICAgICQodGhpcykuZGF0YSh7J2NsaWNrZWQnOnRydWV9KTtcbiAgICAgICQodGhpcykudGV4dCgn7J6Q7IS47Z6IIOuztOq4sCcpXG4gICAgfVxuICB9KTtcblxuXG5cblxuXG5cblxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yNy5cbiAqL1xuXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcblxuICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gIGlmKHNjcm9sbFZhbHVlID49NjAwKXtcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtMScpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XG4gIH1cblxuICBpZihzY3JvbGxWYWx1ZTw2MDApe1xuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC0xJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcbiAgfVxuXG59KTtcblxuXG5cblxuJChmdW5jdGlvbigpe1xuXG5cblxuICAkKCcuZ29vZ2xlbWFwLWNvdmVyJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgJCgnLmdvb2dsZW1hcC1zZXJjaC10ZXh0JykuYWRkQ2xhc3MoJ3Nob3ctdGV4dCcpO1xuICB9KTtcblxuICAkKCcuZ29vZ2xlbWFwLWNvdmVyJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgJCgnLmdvb2dsZW1hcC1zZXJjaC10ZXh0JykucmVtb3ZlQ2xhc3MoJ3Nob3ctdGV4dCcpO1xuICB9KTtcblxuXG59KTsvL+uBnSIsIlxuJChmdW5jdGlvbigpe1xuXG5cblxuXG4gIC8v7Y6Y7J207KeAIOygnOuqqSDrsJQ6IOyKpO2BrOuhpOyLnCDqs6DsoJVcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XG5cbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhzY3JvbGxWYWx1ZSk7XG4gICAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi01LTEnKS5hZGRDbGFzcygnZGlzcGxheScpO1xuICAgIH1cblxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XG4gICAgfVxuXG4gIH0pO1xuXG5cblxuXG4gICQoJy5pbWctd3JhcCcpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xuICAgICQodGhpcykuY2hpbGRyZW4oJy5zaXRlLW5hbWUtdGV4dCcpLmFkZENsYXNzKCdzaG93LXRleHQnKTtcbiAgfSk7XG5cbiAgJCgnLmltZy13cmFwJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnNpdGUtbmFtZS10ZXh0JykucmVtb3ZlQ2xhc3MoJ3Nob3ctdGV4dCcpO1xuICB9KTtcblxuXG5cblxuXG5cblxuXG59KTsgLy/rgZ0iXX0=
