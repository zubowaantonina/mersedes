const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll=document.querySelector('.main__scroll')
const nawArray=[...linksHead,mainScroll]
// const burger = document.querySelector('.humburger-menu');

nawArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        burger.classList.remove('humburger-menu-active')
        const ID = event.target.getAttribute('href').substr(1)
       
        seamless.scrollIntoView(document.getElementById(ID), {
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
        // console.log(document.getElementById(ID).substr(1));
    })
})