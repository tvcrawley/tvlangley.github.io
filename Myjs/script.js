$(document).ready(function(){

  //smooth scroll

  // var headerHeight = $("div#header").height();
  //
  // // Attach the click event
  // $('a[href*=#]').bind("click", function(e) {
  //
  //     var target = $(this).attr("href"); //Get the target
  //     var scrollToPosition = $(target).offset().top - headerHeight;
  //
  //     $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(target){
  //         window.location.hash = target;
  //     });
  //
  // });

  $(".scroll").click(function(evt){
    evt.preventDefault();

    var hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
  });

  $("h3").click(function(){
    $(this).siblings(".description").slideToggle("slow");
  });
  //using janimate
  // $("#title").ready(function(){
  // $("h1").jAnimateSequence(["bounce", "tada", "wobble"]);
  // });
});
