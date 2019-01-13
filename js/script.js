
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

const slowScroll = function () {
  const icon = $(this).attr('href')
  $('html, body').animate({
    scrollTop: $(icon).offset().top
  }, 1300)
}

$(document).ready(function () {
  $('.sidenav').sidenav()
  $('#portfolio .col').hover(toggleDescription)
  $('#home a').on('click', slowScroll)
  $('header li a').on('click', slowScroll)
})
