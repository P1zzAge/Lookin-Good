/* =========================================
   MULTI-PAGE NAVIGATION
========================================= */

const navLinks = document.querySelectorAll(".nav-link");


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


/* Close mobile menu when clicking a link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("open");
        }

    });

});


/* =========================================
   FAQ ACCORDION
========================================= */

const faqButtons = document.querySelectorAll(".faq-item");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;
        const icon = button.querySelector("b");

        if (!answer || !icon) return;

        const isOpen = answer.classList.contains("open");


        /* Close all FAQ items */

        document.querySelectorAll(".faq-answer").forEach(item => {
            item.classList.remove("open");
        });

        document.querySelectorAll(".faq-item b").forEach(item => {
            item.textContent = "+";
        });


        /* Open clicked item */

        if (!isOpen) {

            answer.classList.add("open");
            icon.textContent = "−";

        }

    });

});


/* =========================================
   SIMPLE REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".feature-card, .value, .hair-card, .guide-item"
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


function revealVisibleElements() {

    revealElements.forEach(element => {

        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight - 50) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}


window.addEventListener("scroll", revealVisibleElements);

revealVisibleElements();