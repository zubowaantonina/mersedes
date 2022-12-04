const burgerFunc=()=>{
    const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu-list__link')
const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}
burger.addEventListener('click', () =>
    toggleMenu()
)
const menuClose = () => {
    menuElem.classList.remove('menu-active')
    burger.classList.remove('humburger-menu-active')
 
}
menuLink.forEach(item=>{
    item.addEventListener('click',()=>{
        menuClose(); 
    })
})
}
export default burgerFunc;