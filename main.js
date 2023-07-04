// alert('working')
const mobile_nav = document.querySelector(".mobile-navbar-btn")
const headerElement = document.querySelector(".header")


mobile_nav.addEventListener('click',()=>{
    // alert("btn clicked")
    headerElement.classList.toggle("active")
})