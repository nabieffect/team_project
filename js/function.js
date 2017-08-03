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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5iLTEtMS5qcyIsIm5iLTItMS5qcyIsIm5iLTItMi0yLmpzIiwibmItNC0xLmpzIiwibmItNS0xLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wMi5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlID49NjAwKXtcclxuICAgICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi0xLTEnKS5hZGRDbGFzcygnZGlzcGxheScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNjcm9sbFZhbHVlPDYwMCl7XHJcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMS0xJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjEuXHJcbiAqL1xyXG5cclxuLy9zY3JvbGxUb3AoKSDtmITsnqwg7Iqk7YGs66Gk7JyE7LmYKOyEuOuhnCnqsJIg67CY7ZmYXHJcbi8vc2Nyb2xsbGVmdCgpIO2YhOyerCDsiqTtgazroaTsnITsuZgo6rCA66GcKeqwkiDrsJjtmZhcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFZhbHVlPSQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XHJcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMi0xJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTw2MDApe1xyXG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTItMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Ly/rgZ1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjcuXHJcbiAqL1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gIC8v7Lm065Oc7JeQIOuniOyasOyKpCDsmKTrsoTsi5wgW+yekOyEuO2eiCDrs7TquLBdIOq4gOyUqCDrs7TsnbTquLBcclxuICAgIHZhciAkbmV3c0phc2VoaSA9ICAkKCcuY2FyZC1jb3ZlcicpO1xyXG5cclxuICAgICRuZXdzSmFzZWhpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuamFzZWhpJykuY3NzKHsndmlzaWJpbGl0eSc6J3Zpc2libGUnfSlcclxuICAgIH0pO1xyXG5cclxuICAgICRuZXdzSmFzZWhpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuamFzZWhpJykuY3NzKHsndmlzaWJpbGl0eSc6J2hpZGRlbid9KVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgLy9b7J6Q7IS47Z6IIOuztOq4sF0g7YG066at7IucIOy5tOuTnCDrkqTsp5HquLAgKyDtlZzrsogg642UIO2BtOumreyLnCDri6Tsi5wg65Kk7KeR6riwXHJcbiAgLy/rkqTsp5HtnojrqbTshJwgW+yekOyEuO2eiOuztOq4sF0g7JeQ7IScIFvqsITrnrXtnogg67O06riwXSDroZwg6riA7JSoIOuwlOq/iFxyXG4gICQoJy5qYXNlaGknKS5kYXRhKHsnY2xpY2tlZCc6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZigkKHRoaXMpLmRhdGEoKS5jbGlja2VkICl7XHJcbiAgICAgICQodGhpcykucGFyZW50cygpLnNpYmxpbmdzKCcuY2FyZC1uZXdzLXdyYXAnKS5hZGRDbGFzcygnZmxpcHBlZCcpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydjbGlja2VkJzpmYWxzZX0pO1xyXG4gICAgICAkKHRoaXMpLnRleHQoJ+qwhOuete2eiCDrs7TquLAnKVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoKS5zaWJsaW5ncygnLmNhcmQtbmV3cy13cmFwJykucmVtb3ZlQ2xhc3MoJ2ZsaXBwZWQnKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHsnY2xpY2tlZCc6dHJ1ZX0pO1xyXG4gICAgICAkKHRoaXMpLnRleHQoJ+yekOyEuO2eiCDrs7TquLAnKVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTI3LlxyXG4gKi9cclxuXHJcbiQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgc2Nyb2xsVmFsdWU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XHJcbiAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTQtMScpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpZihzY3JvbGxWYWx1ZTw2MDApe1xyXG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTEnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuXHJcblxyXG4gICQoJy5nb29nbGVtYXAtY292ZXInKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICQoJy5nb29nbGVtYXAtc2VyY2gtdGV4dCcpLmFkZENsYXNzKCdzaG93LXRleHQnKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmdvb2dsZW1hcC1jb3ZlcicpLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgJCgnLmdvb2dsZW1hcC1zZXJjaC10ZXh0JykucmVtb3ZlQ2xhc3MoJ3Nob3ctdGV4dCcpO1xyXG4gIH0pO1xyXG5cclxuXHJcbn0pOy8v64GdIiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG5cclxuXHJcbiAgLy/tjpjsnbTsp4Ag7KCc66qpIOuwlDog7Iqk7YGs66Gk7IucIOqzoOyglVxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhzY3JvbGxWYWx1ZSk7XHJcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XHJcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNS0xJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzY3JvbGxWYWx1ZTw2MDApe1xyXG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAkKCcuaW1nLXdyYXAnKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5zaXRlLW5hbWUtdGV4dCcpLmFkZENsYXNzKCdzaG93LXRleHQnKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmltZy13cmFwJykub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc2l0ZS1uYW1lLXRleHQnKS5yZW1vdmVDbGFzcygnc2hvdy10ZXh0Jyk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7IC8v64GdIl19
