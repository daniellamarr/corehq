$(".nav-menu").click(function(){
    $("#sidenav").toggleClass("active")
})
const teamCards = document.getElementById('team-cards');
$('#card-btn-left').click(() => {
    teamCards.scrollBy(-320,0);
})
$('#card-btn-right').click(() => {
    teamCards.scrollBy(320,0);
})
window.addEventListener('resize',() => {
    if(window.innerWidth > 600){
        $('#sidenav').removeClass('active');
    }
})
$('#sidenav a').click(() => {
    $('#sidenav').removeClass('active');
})
$('.scroll').click((e) => {
    const target = e.target.dataset.target;
    window.scrollTo(0,$(`#${target}`).offset().top-60);
})

$('nav a').click(function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    window.scrollTo(0,$(target).offset().top-60);
})

$(window).on('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $('header').addClass('header-fixed');
    }else{
        $('header').removeClass('header-fixed');
    }
})

$()
$(".videoWatch").click(function() {
    $("#playVideo").css('display', 'block');
})

$("#playVideo").click(function() {
    $(this).css('display', 'none');
})
