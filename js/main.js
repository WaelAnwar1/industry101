const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Header Container 

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption, 
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption, 
    delay: 500,
});

// about Container
ScrollReveal().reveal(".about__item",{
    ...scrollRevealOption,
    interval: 500,
});


//stats Container
    ScrollReveal().reveal(".stats__image img", {
        ...scrollRevealOption,
        Origin: "right",
        interval: 500,
    });

    ScrollReveal().reveal(".stats__card", {
        interval: 500,
        duration: 500,
        delay: 1000,
    });

// Cards Container
    ScrollReveal().reveal(".blog__card", {
        ...scrollRevealOption,
        interval: 500,
    });

// customers

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el:".swiper-pagination",
    },
});


