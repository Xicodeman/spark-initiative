//$(document).ready(function () {
//$('#backTop').click(function (){
//  $('html,body').animate({scrollTop : 0},1800);
//  return false;
//});
//$(window).scroll(function(){
//    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
//    if (scrollBottom>=$('#footer').height()){
//        $('#backTop').css('bottom','20px');            
//    }else {
//        $('#backTop').css('bottom',$('#footer').height()-scrollBottom +40+'px');
//    }
//});
//});



$(document).ready(function(){
    var btt = $('.back-to-top');
    
    btt.on('click', function(e){
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
//        an event argument to prevent the defaul behavior
        e.preventDefault();
    });

    
    $(window).on('scroll', function(){
        var self = $(this),
        height = self.height(),
        top = self.scrollTop();


      if(top > height) {
          if(!btt.is(':visible')) {
              btt.show();
          }
      }   else{
          btt.hide();
      }        
                 });

});