//-------------menu-slider-category-------à khoan
const itemsliderbar = document.querySelectorAll(".category-left-li");
itemsliderbar.forEach(function (menu, index) {
    menu.addEventListener("click", function () {
        menu.children[0].classList.toggle("block");
    })
})