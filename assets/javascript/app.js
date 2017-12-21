$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    }
    else {
      $('nav').removeClass('shrink');
    }
});

$(document).ready(function() {
    var scrollLink = $('.scroll');
    //Smooth scrolling
    scrollLink.click(function(event) {
      //remove default to animate
      event.preventDefault();
      //select html body animate css properties
      // css properties in {} followed by comma for duration
      //example .animate({width: 50}, 1000)
      $('body,html').animate({
        //bring scroll location to
        scrollTop: $(this.hash).offset().top -50
      }, 1000);
    })
})

