var swiper = new Swiper(".mySwiper", {
    spaceBetween: 2,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 20,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 5000,
      },
});