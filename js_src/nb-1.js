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
