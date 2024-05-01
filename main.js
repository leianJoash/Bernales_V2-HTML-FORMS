// Function to handle clicking on "Create New Order" buttons
function handleCreateOrderButtonClick() {
  window.location.href = "order-form.html";
}

// Function to handle clicking on "See Full Menu" buttons
function handleSeeFullMenuButtonClick() {
  window.location.href = "gallery.html";
}

// Function to handle clicking on the shopping bag button
function handleShoppingBagButtonClick() {
  window.location.href = "gallery.html";
}

// Add event listeners to the "Create New Order" buttons
const createOrderButtons = document.querySelectorAll('.special__footer .btn');
createOrderButtons.forEach(button => {
  button.addEventListener('click', handleCreateOrderButtonClick);
});

// Add event listener to the "See Full Menu" button
const seeFullMenuButton = document.querySelector('.explore__btn .btn');
seeFullMenuButton.addEventListener('click', handleSeeFullMenuButtonClick);

// Add event listener to the shopping bag button
const shoppingBagButton = document.querySelector('.nav__btn .btn');
shoppingBagButton.addEventListener('click', handleShoppingBagButtonClick);

// Rest of your existing script...

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
navLinks.classList.remove("open");
menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
distance: "50px",
origin: "bottom",
duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
...scrollRevealOption,
origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
...scrollRevealOption,
delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
...scrollRevealOption,
delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
...scrollRevealOption,
delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
...scrollRevealOption,
origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
...scrollRevealOption,
delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
...scrollRevealOption,
delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
...scrollRevealOption,
delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
...scrollRevealOption,
interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
...scrollRevealOption,
origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
...scrollRevealOption,
delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
...scrollRevealOption,
delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
...scrollRevealOption,
delay: 1500,
interval: 500,
});

var swiper = new Swiper('.special__grid', {
slidesPerView: 1,
spaceBetween: 30,
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
});
