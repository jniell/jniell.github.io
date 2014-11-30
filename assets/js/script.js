$(document).ready(function() {

$("#carousel-prev").hide()

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

$("#learnMore").hover(function(){
  $("#learnMore").css("background", "#5f5f5f");
});

$("#learnMore").click(function(){
  $("#second-page").scrollView();
});

$("#about").click(function(){
  $("#second-page").scrollView();
});

$("#why").click(function(){
  $("#second-page").scrollView();
});

$("#cont").click(function(){
  $("#page-three").scrollView();
});


  //Implement the "slide to left" when the user clicks on #carousel-next here


var leftMargin = 0;
$("#carousel-next").click(function(){
      leftMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (leftMargin == -3840 || leftMargin % 960 != 0) {
        return false;
      }
      else if (leftMargin == -3840 + 960) {
        $("#carousel").css("margin-left", (leftMargin - 960))
        $("#carousel-next").hide();
        
      } 
      else {
        $("#carousel").css("margin-left", (leftMargin - 960)) 
        $("#carousel-prev").show();
        
      }
    });
  //Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-prev").click(function(){
    leftMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (leftMargin == 0 || leftMargin % 960 != 0) {
       $("#carousel-prev").hide();
      return false;
    } 
    if (leftMargin == -960) {
      $("#carousel").css("margin-left", (leftMargin + 960)) 
      $("#carousel-prev").hide();

    }

    else {
      $("#carousel").css("margin-left", (leftMargin + 960)) 
      $("#carousel-next").show();
     

    }
  });


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});