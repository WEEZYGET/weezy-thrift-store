// 1. Update Footer Year Automatically 
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// 2. Show Welcome Message Once Per Visit
window.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("visited")) {
        alert("Welcome to Weezy Thrift Store! 🧥✨");
        sessionStorage.setItem("visited", "true");
    }
});

// 3. Character Counter for Contact Form
const messageInput = document.querySelector("textarea[name='message']");
if (messageInput) {
    const counter = document.createElement("small");
    counter.style.display = "block";
    counter.style.marginTop = "5px";
    messageInput.parentElement.appendChild(counter);

    messageInput.addEventListener("input", () => {
        const remaining = 300 - messageInput.value.length;
        counter.textContent = `${remaining} characters remaining`;
    });
}

// 4. FADE SLIDESHOW LOGIC
let fadeIndex = 0;
const fadeSlides = document.querySelectorAll(".fade-slide");
const nextFadeBtn = document.querySelector(".fade-next");
const prevFadeBtn = document.querySelector(".fade-prev");

function showFadeSlide(index) {
    fadeSlides.forEach((slide) => {
        slide.classList.remove("active");
    });
    fadeSlides[index].classList.add("active");
}

if (nextFadeBtn && prevFadeBtn && fadeSlides.length > 0) {
    nextFadeBtn.addEventListener("click", () => {
        fadeIndex = (fadeIndex + 1) % fadeSlides.length;
        showFadeSlide(fadeIndex);
    });

    prevFadeBtn.addEventListener("click", () => {
        fadeIndex = (fadeIndex - 1 + fadeSlides.length) % fadeSlides.length;
        showFadeSlide(fadeIndex);
    });

    setInterval(() => {
        fadeIndex = (fadeIndex + 1) % fadeSlides.length;
        showFadeSlide(fadeIndex);
    }, 4000);
}

// 5. Enquiry Form Submission
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const successMsg = document.getElementById("enquirySuccess");

        if (name && email && subject && message) {
            successMsg.classList.remove("hidden");
            enquiryForm.reset();

            setTimeout(() => {
                successMsg.classList.add("hidden");
            }, 5000);
        } else {
            alert("Please fill out all fields.");
        }
    });
}
