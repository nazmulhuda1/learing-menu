// sticky menu
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY)
})


// menu icon toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}