$(document).ready(function(){

//smooth scroll to section doesn't work
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
  //using janimate
  // $("#title").ready(function(){
  // $("h1").jAnimateSequence(["bounce", "tada", "wobble"]);
  // });
});
