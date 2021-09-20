new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
      },
});

document.getElementById('BUT').addEventListener('click', scrollToElement);
function scrollToElement(e) {
element = document.getElementById("AAAA")
element.scrollIntoView(true);
}