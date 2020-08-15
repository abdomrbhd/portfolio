const sectionToggler = document.getElementById("active-section-toggler");
const sectionTogglerIcon = document.querySelector(".active-section-toggler i");

sectionToggler.addEventListener("click", (e) => {
    let dataActive, dataNotActive;

    if (e.target.nodeName === "I") {
        dataActive = e.target.parentElement.dataset.active;
        dataNotActive = e.target.parentElement.dataset.notActive;
    } else {
        dataActive = e.target.dataset.active;
        dataNotActive = e.target.dataset.notActive;
    }

    const activeElement = document.querySelector(dataActive);
    const notActiveElement = document.querySelector(dataNotActive);

    if (dataActive === "#landing-section") {
        activeElement.classList.remove("section-top--active");
        activeElement.classList.add("section-top--not-active");

        notActiveElement.classList.remove("section-bottom--not-active");
        notActiveElement.classList.add("section-bottom--active");

        sectionTogglerIcon.classList.replace("fa-caret-down", "fa-caret-up");
    } else {
        activeElement.classList.remove("section-bottom--active");
        activeElement.classList.add("section-bottom--not-active");

        notActiveElement.classList.remove("section-top--not-active");
        notActiveElement.classList.add("section-top--active");

        sectionTogglerIcon.classList.replace("fa-caret-up", "fa-caret-down");
    }

    if (e.target.nodeName === "I") {
        e.target.parentElement.dataset.active = dataNotActive;
        e.target.parentElement.dataset.notActive = dataActive;
    } else {
        e.target.dataset.active = dataNotActive;
        e.target.dataset.notActive = dataActive;
    }
});

const navToggler = document.getElementById("nav-toggler");
const nav = document.getElementById("nav");
const navTogglerIcon = document.querySelector(".nav-toggler__icon");

navToggler.addEventListener("click", () => {
    nav.classList.toggle("nav--open");

    if (navTogglerIcon.classList.contains("fa-bars")) {
        navTogglerIcon.classList.replace("fa-bars", "fa-times");
    } else {
        navTogglerIcon.classList.replace("fa-times", "fa-bars");
    }
});

const contactOverllay = document.getElementById("contact-overllay");
const formWrapper = document.querySelector(".contact__form-wrapper");
const contactOpenBtn = document.getElementById("contact__open-btn");
const contactCloseBtn = document.getElementById("contact__close-btn");

function handleClick() {
    contactOverllay.classList.toggle("contact__overllay--expanded");
    formWrapper.classList.toggle("contact__form-wrapper--show");

    contactOpenBtn.classList.toggle("contact__btn--active");
    contactCloseBtn.classList.toggle("contact__btn--active");
}

contactOpenBtn.addEventListener("click", handleClick);
contactCloseBtn.addEventListener("click", handleClick);

const slider = document.getElementById("slider");
const sliderItems = Array.from(document.querySelectorAll(".slider-items"));
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const paginationsContainer = document.getElementById("paginations-container");

let counter = 1;

for (let i = 0; i < sliderItems.length - 2; i++) {
    const pagination = document.createElement("li");
    pagination.classList.add("pagination_item");

    if (i === 0) {
        pagination.classList.add("pagination_item--active");
    }

    paginationsContainer.appendChild(pagination);
}

const paginations = document.querySelectorAll(".pagination_item");

function paginationActivater(index) {
    paginations.forEach((p) => p.classList.remove("pagination_item--active"));

    let length = paginations.length;

    if (index > length) {
        paginations[0].classList.add("pagination_item--active");
    } else if (index < 1) {
        paginations[length - 1].classList.add("pagination_item--active");
    } else {
        paginations[index - 1].classList.add("pagination_item--active");
    }
}

nextBtn.addEventListener("click", () => {
    if (counter >= sliderItems.length - 1) return;
    counter++;
    paginationActivater(counter);

    slider.style.transition = "transform .3s";
    slider.style.transform = `translateX(${counter * -100}%)`;
});

prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    slider.style.transition = "transform .3s";
    counter--;
    paginationActivater(counter);
    slider.style.transform = `translateX(${counter * -100}%)`;
});

slider.addEventListener("transitionend", () => {
    if (sliderItems[counter].classList.contains("first-item-clone")) {
        counter = sliderItems.length - counter;
        slider.style.transition = "none";
        slider.style.transform = `translateX(${counter * -100}%)`;
    } else if (sliderItems[counter].classList.contains("last-item-clone")) {
        counter = sliderItems.length - 2;
        slider.style.transition = "none";
        slider.style.transform = `translateX(${counter * -100}%)`;
    }
});

const configBtn = document.querySelector("#config-btn");
const overllay = document.querySelector(".body__overllay");
const options = document.querySelector(".options");
const reflectColors = document.getElementById("reflect-colors");

configBtn.addEventListener("click", (e) => {
    overllay.classList.add("overllay--active");

    options.style.transform = "translate(-50%, -50%)";
    options.classList.add("options--show");
});
