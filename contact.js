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




// Email sending functionality
const form = document.querySelector('form');
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${name.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}<br>`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "jeffgraphics254@gmail.com",
        Password: "1D649464C22803B432CB5EBA01BE2CD54DBE",
        To: 'jeffgraphics254@gmail.com',
        From: "jeffgraphics254@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Sent!",
                    text: "Kindly Check your email!",
                    icon: "success"
                });

                // Clear the form fields after successful submission
                resetForm();
            }
        }
    );
}

// Function to reset the form
function resetForm() {
    // Reset the form fields to their default values
    form.reset();
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});

// Document ready event
document.addEventListener('DOMContentLoaded', function () {
    // Add a short delay to make sure the animation is applied after the content is fully loaded
    setTimeout(function () {
        document.querySelector('.big-wrapper').style.opacity = '1';
    }, 300);
});