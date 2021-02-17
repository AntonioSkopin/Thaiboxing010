window.onscroll = () => {
    const nav = document.getElementById("navbar");
    const navTitle = document.getElementById("nav-title");

    // When user scrolls add shadow to navbar
    if (window.scrollY > 0) {
        nav.classList.add("shadow");
    } else {
        nav.classList.remove("shadow");
    }

    // Show Title in navbar when Name isn't visbile anymore
    if (window.scrollY > 250) {
        navTitle.classList.remove("nav-title");
        navTitle.classList.add("nav-title-visible");
        // navTitle.classList.add("slide-left-in");
    } else {
        navTitle.classList.remove("nav-title-visible");
        navTitle.classList.add("nav-title");
    }
}