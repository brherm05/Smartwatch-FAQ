const faqImage = document.querySelector("#faq_image");
const faqImageOrigSrc = document.querySelector('#faq_image').src;
const faqImageOrigAlt = document.querySelector('#faq_image').alt;
const h2s = document.querySelectorAll('#h2');


const toggleVisibility = evt => {
    const ct = evt.currentTarget;

    let allClosed = false;

    for (let h2 of h2s) {
        if (h2 === ct) {
            if (h2.classList.contains("minus") ) {
                allClosed = true; }

                h2.classList.toggle("minus");
                h2.nextElementSibling.classList.toggle("open");

                const newSrc = h2.dataset.img;
                const newAlt = h2.dataset.alt;

                faqImage.src = newSrc;
                faqImage.alt = newAlt;
        } else {
            h2.classList.remove("minus");
            h2.nextElementSibling.classList.remove("open");
        }
    }
}