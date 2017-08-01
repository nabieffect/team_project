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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5iLTItMS5qcyIsIm5iLTItMi0yLmpzIiwibmItNC0xLmpzIiwibmItNS0xLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjEuXG4gKi9cblxuLy9zY3JvbGxUb3AoKSDtmITsnqwg7Iqk7YGs66Gk7JyE7LmYKOyEuOuhnCnqsJIg67CY7ZmYXG4vL3Njcm9sbGxlZnQoKSDtmITsnqwg7Iqk7YGs66Gk7JyE7LmYKOqwgOuhnCnqsJIg67CY7ZmYXG5cbiQoZnVuY3Rpb24oKXtcblxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcblxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTItMScpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XG4gICAgfVxuXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItMi0xJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcbiAgICB9XG5cbiAgfSk7XG5cbn0pOy8v64GdXG5cblxuXG5cblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wNy0yNy5cbiAqL1xuXG5cbiQoZnVuY3Rpb24oKXtcblxuXG4gIC8v7Lm065Oc7JeQIOuniOyasOyKpCDsmKTrsoTsi5wgW+yekOyEuO2eiCDrs7TquLBdIOq4gOyUqCDrs7TsnbTquLBcbiAgICB2YXIgJG5ld3NKYXNlaGkgPSAgJCgnLmNhcmQtY292ZXInKTtcblxuICAgICRuZXdzSmFzZWhpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xuICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmphc2VoaScpLmNzcyh7J3Zpc2liaWxpdHknOid2aXNpYmxlJ30pXG4gICAgfSk7XG5cbiAgICAkbmV3c0phc2VoaS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykuY2hpbGRyZW4oJy5qYXNlaGknKS5jc3Moeyd2aXNpYmlsaXR5JzonaGlkZGVuJ30pXG4gICAgfSk7XG5cblxuXG4gIC8vW+yekOyEuO2eiCDrs7TquLBdIO2BtOumreyLnCDsubTrk5wg65Kk7KeR6riwICsg7ZWc67KIIOuNlCDtgbTrpq3si5wg64uk7IucIOuSpOynkeq4sFxuICAvL+uSpOynke2eiOuptOyEnCBb7J6Q7IS47Z6I67O06riwXSDsl5DshJwgW+qwhOuete2eiCDrs7TquLBdIOuhnCDquIDslKgg67CU6r+IXG4gICQoJy5qYXNlaGknKS5kYXRhKHsnY2xpY2tlZCc6dHJ1ZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcblxuICAgIGlmKCQodGhpcykuZGF0YSgpLmNsaWNrZWQgKXtcbiAgICAgICQodGhpcykucGFyZW50cygpLnNpYmxpbmdzKCcuY2FyZC1uZXdzLXdyYXAnKS5hZGRDbGFzcygnZmxpcHBlZCcpO1xuICAgICAgJCh0aGlzKS5kYXRhKHsnY2xpY2tlZCc6ZmFsc2V9KTtcbiAgICAgICQodGhpcykudGV4dCgn6rCE65617Z6IIOuztOq4sCcpXG5cbiAgICB9ZWxzZXtcbiAgICAgICQodGhpcykucGFyZW50cygpLnNpYmxpbmdzKCcuY2FyZC1uZXdzLXdyYXAnKS5yZW1vdmVDbGFzcygnZmxpcHBlZCcpO1xuICAgICAgJCh0aGlzKS5kYXRhKHsnY2xpY2tlZCc6dHJ1ZX0pO1xuICAgICAgJCh0aGlzKS50ZXh0KCfsnpDshLjtnogg67O06riwJylcbiAgICB9XG4gIH0pO1xuXG5cblxuXG5cblxuXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTI3LlxuICovXG5cbiQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xuXG4gIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgaWYoc2Nyb2xsVmFsdWUgPj02MDApe1xuICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNC0xJykuYWRkQ2xhc3MoJ2Rpc3BsYXknKTtcbiAgfVxuXG4gIGlmKHNjcm9sbFZhbHVlPDYwMCl7XG4gICAgJCgnLnRpdGxlLXBpYy1maXhlZC1uYi00LTEnKS5yZW1vdmVDbGFzcygnZGlzcGxheScpO1xuICB9XG5cbn0pO1xuXG5cblxuXG4kKGZ1bmN0aW9uKCl7XG5cblxuXG4gICQoJy5nb29nbGVtYXAtY292ZXInKS5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcbiAgICAkKCcuZ29vZ2xlbWFwLXNlcmNoLXRleHQnKS5hZGRDbGFzcygnc2hvdy10ZXh0Jyk7XG4gIH0pO1xuXG4gICQoJy5nb29nbGVtYXAtY292ZXInKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcbiAgICAkKCcuZ29vZ2xlbWFwLXNlcmNoLXRleHQnKS5yZW1vdmVDbGFzcygnc2hvdy10ZXh0Jyk7XG4gIH0pO1xuXG5cbn0pOy8v64GdIiwiXG4kKGZ1bmN0aW9uKCl7XG5cblxuXG5cbiAgLy/tjpjsnbTsp4Ag7KCc66qpIOuwlDog7Iqk7YGs66Gk7IucIOqzoOyglVxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsZnVuY3Rpb24oKXtcblxuICAgIHZhciBzY3JvbGxWYWx1ZT0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAvL2NvbnNvbGUubG9nKHNjcm9sbFZhbHVlKTtcbiAgICBpZihzY3JvbGxWYWx1ZSA+PTYwMCl7XG4gICAgICAkKCcudGl0bGUtcGljLWZpeGVkLW5iLTUtMScpLmFkZENsYXNzKCdkaXNwbGF5Jyk7XG4gICAgfVxuXG4gICAgaWYoc2Nyb2xsVmFsdWU8NjAwKXtcbiAgICAgICQoJy50aXRsZS1waWMtZml4ZWQtbmItNS0xJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXknKTtcbiAgICB9XG5cbiAgfSk7XG5cblxuXG5cbiAgJCgnLmltZy13cmFwJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5jaGlsZHJlbignLnNpdGUtbmFtZS10ZXh0JykuYWRkQ2xhc3MoJ3Nob3ctdGV4dCcpO1xuICB9KTtcblxuICAkKCcuaW1nLXdyYXAnKS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc2l0ZS1uYW1lLXRleHQnKS5yZW1vdmVDbGFzcygnc2hvdy10ZXh0Jyk7XG4gIH0pO1xuXG5cblxuXG5cblxuXG5cbn0pOyAvL+uBnSJdfQ==
