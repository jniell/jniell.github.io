$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
$("#sidebar-button").click(function(){
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $('body').removeClass("no-scroll");
    $(".sidebar-container").removeClass("sidebar-active");
    $("#sidebar-button").removeClass("button-active");
    $(".page-wrapper").removeClass("wrapper-active");
  }
  else {
    $("#sidebar-button").addClass("button-active");
    $(".sidebar-container").addClass("sidebar-active");
    $(".page-wrapper").addClass("wrapper-active");
    setTimeout(function() {
                            $('body').addClass('no-scroll');
                          }, 300);  
  }
  
});


$.fn.scrollView = function() {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
}


$("#learnMore").click(function(){
  $("#second-page").scrollView();
});

$("#learnMore").click(function(){
  window.location.hash = '#your-page-element';
});

  //Implement the "slide to left" when the user clicks on #carousel-next here
var leftMargin = 0;
$("#carousel-next").click(function(){
      leftMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (leftMargin == -3840 || leftMargin % 960 != 0) {
        return false;
      } else {
        $("#carousel").css("margin-left", (leftMargin - 960)) 
      }
    });
  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-prev").click(function(){
    leftMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (leftMargin == 0 || leftMargin % 960 != 0) {
      return false;
    } else {
      $("#carousel").css("margin-left", (leftMargin + 960)) 
    }
  });


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});