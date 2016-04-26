$(document).ready(function(){

  //smooth scroll
  $("a").click(function(evt){
    evt.preventDefault();

    var hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
    // return false;
  })

  $("h3").click(function(){
    $(this).siblings(".description").slideToggle("slow");
  });
  //using janimate
  // $("#title").ready(function(){
  // $("h1").jAnimateSequence(["bounce", "tada", "wobble"]);
  // });
});
