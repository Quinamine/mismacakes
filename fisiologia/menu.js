"use strict"
const menu = {
    openOrCloseMeatBalls() {
        const meatBallsMenuContent = document.querySelector(".meatballs-menu-expanded");
        meatBallsMenuContent.classList.toggle("--open");
    },
    closeMeatBalls() {
        const meatBallsMenuContent = document.querySelector(".meatballs-menu-expanded");
        meatBallsMenuContent.classList.remove("--open");
    }
}
const Tooltip = {
    mostrar(tooltip) {
        tooltip.classList.add("--show");
    },
    omitir(tooltip) {
        tooltip.classList.remove("--show");
    }
}
function listenToEvents() {
    // Open & close meatBalls-menu by clicking the menu
    const meatBallsMenu = document.querySelector(".meatballs-menu");
    meatBallsMenu.addEventListener("click", menu.openOrCloseMeatBalls);
    // Close meatBalls-menu by clicking anywhere
    window.addEventListener("click", event => {
        if(!event.target.matches(".meatballs-menu, .meatballs-menu__dot")) {
            menu.closeMeatBalls();
        }
    });
    // Open meatBalls-menu articles
    const meatBallsMenuOptions = document.querySelectorAll(".meatballs-menu-expanded__option");
    meatBallsMenuOptions.forEach( option => {
        option.addEventListener("click", () => {
            if(option.dataset.article) {
                const relatedArticle = document.querySelector(`.${option.dataset.article}`);
                menu.openArticle(relatedArticle);
                document.body.classList.add("--overflow-h"); // Add Overflow: hidden to the body
                document.querySelector(".blurring-div").classList.add("--on"); // Blur background
            }
        });
    });
    // Open main-menu-tabs;
    const mainMenuBtns = document.querySelectorAll(".header__main-menu__btn");
    mainMenuBtns.forEach( btn => {
        btn.addEventListener("click", () => menu.showCurrentTabDoser(btn));
    });
    // Tooltips
    const tooltip = document.querySelector(".tooltip");
    const menuOptionsContainer = document.querySelector(".header__menu__ul");
    setTimeout(() => {
            Tooltip.mostrar(tooltip);
        }, 3000);
        setTimeout(() => {
            Tooltip.omitir(tooltip);
        }, 10000);
};
window.addEventListener("load", () => {
    listenToEvents();
});
