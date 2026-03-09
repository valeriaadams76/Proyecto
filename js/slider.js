const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showSlide(i){
    index = (i + slide.length) % slide.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", ()=> showSlide(index + 1));
prev.addEventListener("click", ()=> showSlide(index - 1));

setInterval(()=> showSlide(index + 1), 5000);