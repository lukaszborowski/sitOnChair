document.addEventListener("DOMContentLoaded", function () {

    const popShow = $(".about-company");
    const prevSlide = $(".prev");
    const nextSlide = $(".next");
    const callbacks = $.Callbacks();
    let slideIndex = 1;

    // popUp

    popShow.on('click', () => {
        $(".popup-text").toggleClass("show");
    });

    // Slider

    prevSlide.on('click', () => {
        showSlides(slideIndex = slideIndex - 1)
    });
    nextSlide.on('click', () => {
        showSlides(slideIndex = slideIndex + 1);
    });

    const showSlides = (n) => {

        let i;
        const slides = $(".mySlides");
        console.log(slides.length);
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";

    };

    showSlides(slideIndex);

});