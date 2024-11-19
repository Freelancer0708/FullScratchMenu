const menuBar = document.getElementById("menu-bar");
const menu = document.getElementById("menu");

menuBar.addEventListener("click",() => {
    if (menuBar.classList.contains("active")) {
        menuBar.classList.remove("active");
        menu.classList.remove("active");
    } else {
        menuBar.classList.add("active");
        menu.classList.add("active");
    }
});