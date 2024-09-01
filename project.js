// Select the elements
var toggle_btn;
var big_wrapper;
var humbager_menu;

function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    humbager_menu = document.querySelector(".humbager-menu"); // Fix the selector
}

const main = document.querySelector("main");

declare();
let dark = false;

function toggleAnimation() {
    // Clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        // Reset variables
        declare();
        events();
    });
}

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
    humbager_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    });
}

events();



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  // Image filtering
  function filterSelection(filter) {
    let images = document.querySelectorAll('.image');
    images.forEach(image => {
        if (filter === 'all' || image.dataset.filter === filter) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Image preview
function enlargeImage(src) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modalImage').src = src;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('image');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    document.getElementById('modalImage').src = slides[slideIndex - 1].querySelector('img').src;
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    } else if (event.key === 'ArrowLeft') {
        plusSlides(-1);
    } else if (event.key === 'ArrowRight') {
        plusSlides(1);
    }
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Add a short delay to make sure the animation is applied after the content is fully loaded
    setTimeout(function() {
        document.querySelector('big-wrapper').style.opacity = '1';
    }, 300);
});