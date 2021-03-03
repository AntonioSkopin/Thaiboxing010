window.onscroll = () => {
    const nav = document.getElementById("navbar");

    // When user scrolls add shadow to navbar
    if (window.scrollY > 0) {
        nav.classList.add("shadow-lg");
    } else {
        nav.classList.remove("shadow-lg");
    }
}