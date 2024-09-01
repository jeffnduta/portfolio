var toggle_btn;
var big_wrapper;
var humbager_menu;

function declare() {
    toggle_btn = document.querySelector(".humbager-menu"); // Change the selector
    big_wrapper = document.querySelector(".big-wrapper");
    humbager_menu = document.querySelector(".humbager-menu");
}

function toggleAnimation() {
    big_wrapper.classList.toggle("active");
}

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
}

declare();
events();

//-----================text change=====----

const textContainer = document.getElementById('textContainer');
const spans = textContainer.querySelectorAll('span');
const words = ['graphic designer', 'web designer', 'freelancer'];

let currentWordIndex = 0;

function updateText() {
  spans.forEach((span, index) => {
    span.textContent = words[currentWordIndex][index];
  });
}
   
function nextWord() {
  currentWordIndex = (currentWordIndex + 1) % words.length;
  updateText();
}

setInterval(() => {
  spans.forEach(span => {
    span.style.opacity = 0;
  });

  setTimeout(() => {
    nextWord();
    spans.forEach(span => {
      span.style.opacity = 9;
    });
  }, 500); // Adjust the timing to control the delay between opacity change and text change
}, 2000); // Change text every 2 seconds

//-----=====================TOP NAVIGATION END======-

const light = document.querySelector(".light");
const grid = document.querySelector("#hex-grid");

function moveLight() {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    light.style.transition = "left 0.5s ease-out, top 0.5s ease-out";
    light.style.left = `${newX}px`;
    light.style.top = `${newY}px`;
}
setInterval(moveLight, 2000);





