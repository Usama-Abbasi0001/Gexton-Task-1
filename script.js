let hamburger = document.getElementById("hamburger");
let mobileNav = document.getElementById("header");
let crossIcon = document.getElementById("cross");
let nav = document.getElementById('nav')
mobileNav.style.display = "none";
hamburger.addEventListener("click" ,() => {
    mobileNav.style.display = 'flex';
     mobileNav.style= '';
    nav.style.display = "none"
})

crossIcon.addEventListener("click", () => {
    mobileNav.style.display = 'none';
    nav.style.display = "flex"
})