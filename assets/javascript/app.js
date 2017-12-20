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
      
    })
})

