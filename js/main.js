$('#projects').on('click', function(){
  $('html').animate({
    scrollTop: $('#projects-anchor').offset().top
  }, 1000, "swing");
})

$('#designs').on('click', function(){
  $('html').animate({
    scrollTop: $('#designs-anchor').offset().top
  }, 1000, "swing");
})

$('#about').on('click', function(){
  $('html').animate({
    scrollTop: $('#about-anchor').offset().top
  }, 1000, "swing");
})

var _scrollY = window.scrollY;
window.addEventListener('scroll', handle_scroll);
function handle_scroll(e){
  _scrollY = window.scrollY;
}

requestAnimationFrame(animate);
function animate(){
  $('#name').css('transform', `translateY(${_scrollY*-0.3}px)`);
  $('.fox-logo-container').css('transform', `translateY(${_scrollY*-1}px)`);
  $('.page-title').css('transform', `translateY(${_scrollY*-1}px)`);
  requestAnimationFrame(animate);
}

var lineDrawing = anime({
  targets: '.fox-logo-container path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
});
