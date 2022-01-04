import Swiper from "swiper";

const SLIDER_BODY_CLASSES = {
  slide1: 'slide1-active',
  slide2: 'slide2-active',
  slide3: 'slide3-active',
  slide4: 'slide4-active'
};

export default function slider() {
  let storySlider;
  let sliderContainer = document.getElementById(`story`);
  sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;

  document.body.classList.add(SLIDER_BODY_CLASSES.slide1);
  let prevBodyClass = SLIDER_BODY_CLASSES.slide1;

  const setSlider = function () {
    if (((window.innerWidth / window.innerHeight) < 1) || window.innerWidth < 769) {
      storySlider = new Swiper(`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            console.log('slideChange')
            let backgroundImage = '';
            let bodyClass = '';
            switch(storySlider.activeIndex) {
              case 0:
              case 1:
                backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
                bodyClass = SLIDER_BODY_CLASSES.slide1;
                break;
              case 2:
              case 3:
                backgroundImage = `url("img/slide2.jpg"), linear-gradient(180deg, rgba(45, 54, 179, 0) 0%, #2A34B0 16.85%)`;
                bodyClass = SLIDER_BODY_CLASSES.slide2;
                break;
              case 4:
              case 5:
                backgroundImage = `url("img/slide3.jpg"), linear-gradient(180deg, rgba(92, 138, 198, 0) 0%, #5183C4 16.85%)`;
                bodyClass = SLIDER_BODY_CLASSES.slide3;
                break;
              case 6:
              case 7:
                backgroundImage = `url("img/slide4.jpg"), linear-gradient(180deg, rgba(45, 39, 63, 0) 0%, #2F2A42 16.85%)`;
                bodyClass = SLIDER_BODY_CLASSES.slide4;
                break;
              default:
                break;
            }

            if (backgroundImage) {
              sliderContainer.style.backgroundImage = backgroundImage;
            }

            if (bodyClass) {
              document.body.classList.remove(prevBodyClass);
              document.body.classList.add(bodyClass);
              prevBodyClass = bodyClass;
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    } else {
      storySlider = new Swiper(`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            let backgroundImage = '';
            let bodyClass = '';
            switch(storySlider.activeIndex) {
              case 0:
                backgroundImage = `url("img/slide1.jpg")`;
                bodyClass = SLIDER_BODY_CLASSES.slide1;
                break;
              case 2:
                backgroundImage = `url("img/slide2.jpg")`;
                bodyClass = SLIDER_BODY_CLASSES.slide2;
                break;
              case 4:
                backgroundImage = `url("img/slide3.jpg")`;
                bodyClass = SLIDER_BODY_CLASSES.slide3;
                break;
              case 6:
                backgroundImage = `url("img/slide4.jpg")`;
                bodyClass = SLIDER_BODY_CLASSES.slide4;
                break;
            }

            if (backgroundImage) {
              sliderContainer.style.backgroundImage = backgroundImage;
            }

            if (bodyClass) {
              document.body.classList.remove(prevBodyClass);
              document.body.classList.add(bodyClass);
              prevBodyClass = bodyClass;
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider) {
      storySlider.destroy();
    }
    setSlider();
  });

  setSlider();
};
