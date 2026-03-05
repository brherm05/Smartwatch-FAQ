/**
 * Authors: Ethan McEvoy & Brayden Hermanson
 */

// SETUP GLOBAL VARIABLES
const faqImage = document.querySelector("#faqs img");
const faqImageOrigSrc = faqImage.src;
const faqImageOrigAlt = faqImage.alt;
const h2s = document.querySelectorAll("#faqs h2");

// SETUP THE EVENT HANDLER
const toggleVisibility = evt => {
    // 1. Which H2 was clicked
    const ct = evt.currentTarget;

    // 2. Track if everything ends up closed
    let allClosed = false;

    // 3. Loop through every H2
    for (const h2 of h2s) {

        if (h2 === ct) {
            // If already open, track that everything will be closed
            if (h2.classList.contains("minus")) {
                allClosed = true;
            }

            // Toggle classes
            h2.classList.toggle("minus");
            h2.nextElementSibling.classList.toggle("open");

            // Get image data from attributes
            const newSrc = h2.dataset.img;
            const newAlt = h2.dataset.alt;

            // Update main image
            faqImage.src = newSrc;
            faqImage.alt = newAlt;

        } else {
            // Close other FAQs
            h2.classList.remove("minus");
            h2.nextElementSibling.classList.remove("open");
        }

    };

    // 4. Reset to default image if everything closed
    if (allClosed) {
        faqImage.src = faqImageOrigSrc;
        faqImage.alt = faqImageOrigAlt;
    }

    // 5. Prevent default browser behavior
    evt.preventDefault();
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    // Loop through all H2 headings
    for (const h2 of h2s) {
        h2.addEventListener("click", toggleVisibility);
    }
});