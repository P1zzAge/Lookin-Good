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

    /* =========================================
    THE WAY YOU MOVE — SCROLL RESPONSE
    ========================================= */

    const movementTrack = document.querySelector(
        '.movement-heading-track'
    );

    if (movementTrack) {

        let lastScrollY = window.scrollY;
        let scrollDirection = 1;
        let currentOffset = 0;

        function updateMovementHeading() {

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                scrollDirection = 1;
            } else if (currentScrollY < lastScrollY) {
                scrollDirection = -1;
            }

            lastScrollY = currentScrollY;

            requestAnimationFrame(() => {

                currentOffset += scrollDirection * 0.15;

                movementTrack.style.transform =
                    `translateX(${currentOffset}px)`;

            });
        }

        window.addEventListener(
            'scroll',
            updateMovementHeading,
            { passive: true }
        );

    }

    const movementHeading = document.querySelector('.movement-heading');

    if (movementHeading) {
        const movementObserver = new IntersectionObserver(
            function(entries) {
                if (entries[0].isIntersecting) {
                    movementHeading.classList.add('is-visible');
                    movementObserver.disconnect();
                }
            },
            {
                threshold: 0.25
            }
        );

        movementObserver.observe(movementHeading);
    }

/* =========================================
   HAIR TEXTURE — SCROLL REVEAL
========================================= */

const textureRows = document.querySelectorAll(".hair-texture-row");

if (textureRows.length) {

    const textureObserver = new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("texture-visible");
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    textureRows.forEach(function(row) {
        textureObserver.observe(row);
    });
}