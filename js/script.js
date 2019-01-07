
const toggleDescription = function (event) {
  // toogle words
   $(this).children().toggle()

  // toggle image
  if ($(this).css('background-size') === 'cover') {
    $(this).css('background-size', '0 0')
  } else {
    $(this).css('background-size', 'cover')
  }
}

$(document).ready(function () {
  $('.sidenav').sidenav()
  $('#portfolio .col').hover(toggleDescription)
})
