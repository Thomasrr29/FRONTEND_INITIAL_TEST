const menuToogle = document.querySelector('.menu-toogle')
const menu = document.querySelector('.menu')

console.log(menuToogle)
console.log(menu)

menuToogle.addEventListener('click', () => {

    menu.classList.toggle('show')

})  