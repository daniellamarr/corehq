$(".nav-menu").click(function(){
    $("#sidenav").toggleClass("active")
})
const teamCards = document.getElementById('team-cards');
$('#card-btn-left').click(() => {
    teamCards.scrollBy(-320,0)
})
$('#card-btn-right').click(() => {
    teamCards.scrollBy(320,0)
})
window.addEventListener('resize',() => {
    if(window.innerWidth > 600){
        $('#sidenav').removeClass('active')
    }
})