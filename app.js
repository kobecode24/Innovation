document.getElementById("burger").addEventListener("click", function() {
    const menu = document.getElementById("mobileMenu");
    const burgerIcon = document.getElementById("burgerIcon");

    if (menu.classList.contains("mobile-menu-active")) {
        menu.classList.remove("mobile-menu-active");
        burgerIcon.classList.remove("fa-x");
        burgerIcon.classList.add("fa-bars");
    } else {
        menu.classList.add("mobile-menu-active");
        burgerIcon.classList.remove("fa-bars");
        burgerIcon.classList.add("fa-x");
    }
});