document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".galeriaSwiper").forEach((slider) => {
    let desktopSlides = 3; // valor por defecto

    if (slider.classList.contains("cols-2")) {
      desktopSlides = 2;
    } else if (slider.classList.contains("cols-3")) {
      desktopSlides = 3;
    } else if (slider.classList.contains("cols-4")) {
      desktopSlides = 4;
    }

    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,

      pagination: {
        el: slider.querySelector(".swiper-pagination"),
        clickable: true,
      },

      breakpoints: {
        769: {
          slidesPerView: desktopSlides,
          spaceBetween: 24,
          allowTouchMove: true,
        }
      }
    });
  });
});