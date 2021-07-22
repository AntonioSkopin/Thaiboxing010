window.onscroll = () => {
    const nav = document.getElementById("navbar");

    // When user scrolls add shadow to navbar
    if (window.scrollY > 0) {
        nav.classList.add("shadow-md");
        nav.classList.add("bg-white");
    } else {
        nav.classList.remove("shadow-md");
        nav.classList.remove("bg-white");
    }
}