"use strict"
let imgIndex = 1;
const imgs = document.querySelectorAll(".banner__img");
const progressCircles = document.querySelectorAll(".banner__progress__btn");
// Change Image Slide by click
progressCircles.forEach( pCircle => {
    pCircle.addEventListener("click", () => {
        for (let i = 0; i < progressCircles.length; i++) {
            if(progressCircles[i] === pCircle) {
                imgIndex = i;
            }
        }
    });
})
function slide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove("banner__img--current");
        progressCircles[i].classList.remove("banner__progress__btn--full");
    }
    imgs[imgIndex].classList.add("banner__img--current");
    progressCircles[imgIndex].classList.add("banner__progress__btn--full")
    imgIndex++;
    if(imgIndex === imgs.length) {
        imgIndex = 0;
    }
}
// Call slide on load
let slideInterval = setInterval(slide, 2500);