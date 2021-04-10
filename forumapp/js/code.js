function swiper_resp(window) {
    if ($(window).width() < 992) {
        spv = 2;
    } else spv = 3;
}

swiper_resp($(window));

var swiper = new Swiper('.swiper-container', {
    slidesPerView: spv,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});