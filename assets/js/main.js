// document.querySelector('#nav-small').addEventListener('click', () => {
//     document.querySelector('#sidenav').classList.add('active')
//     document.querySelector('#nav-small').classList.add('active')
// })
// document.querySelector('#sidenav-hide').addEventListener('click',() => {
//     document.querySelector('#sidenav').classList.remove('active')
//     document.querySelector('#nav-small').classList.remove('active') 
// })


$(".nav-menu").click(function(){
    $("#sidenav").toggleClass("active")
})