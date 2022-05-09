(function () {
  const responsiveCardFunctionality = () => {
    screenResize();
    window.addEventListener('resize', screenResize);
  };

  const screenResize = () => {
    const sliderDesktopEl = document.querySelector(
      '.plan__slider__priceContainer--1'
    );

    const sliderMobileEl = document.querySelector(
      '.plan__slider__priceContainer--2'
    );

    if (window.innerWidth < 1440) {
      if (sliderDesktopEl.classList.contains('hide')) return;

      sliderDesktopEl.classList.add('hide');
      sliderMobileEl.classList.remove('hide');
    } else {
      if (sliderMobileEl.classList.contains('hide')) return;

      sliderMobileEl.classList.add('hide');
      sliderDesktopEl.classList.remove('hide');
    }
  };

  const changePrice = () => {
    const sliderEl = document.querySelector('#slider');
    const pageViewsEl = document.querySelector('#pageViews');
    const planPriceEl1 = document.querySelector('#planPrice--1');
    const planPriceEl2 = document.querySelector('#planPrice--2');

    sliderEl.style.setProperty('--width', `${sliderEl.value}%`);

    sliderEl.addEventListener('input', () => {
      sliderEl.style.setProperty('--width', `${sliderEl.value}%`);

      if (sliderEl.value * 10000 === 10000) {
        pageViewsEl.textContent = '10K';
        planPriceEl1.innerText = '$8.00';
        planPriceEl2.innerText = '$8.00';
      } else if (sliderEl.value * 10000 === 50000) {
        pageViewsEl.textContent = '50K';
        planPriceEl1.innerText = '$12.00';
        planPriceEl1.innerText = '$12.00';
      } else if (sliderEl.value * 10000 === 100000) {
        pageViewsEl.textContent = '100K';
        planPriceEl1.innerText = '$16.00';
        planPriceEl2.innerText = '$16.00';
      } else if (sliderEl.value * 10000 === 500000) {
        pageViewsEl.textContent = '500K';
        planPriceEl1.innerText = '$24.00';
        planPriceEl2.innerText = '$24.00';
      } else if (sliderEl.value * 10000 === 1000000) {
        pageViewsEl.textContent = '1M';
        planPriceEl1.innerText = '$36.00';
        planPriceEl2.innerText = '$36.00';
      }
    });
  };

  const colorSwitch = () => {
    const switchEl = document.querySelector('.switch__checkbox');
    const labelEl = document.querySelector('.plan__slider__options__switch');

    switchEl.addEventListener('click', () => {
      if (switchEl.checked) {
        labelEl.style.background = '#7aeadf';
      } else {
        labelEl.style.background = '#cfd8ef';
      }
    });
  };

  responsiveCardFunctionality();
  changePrice();
  colorSwitch();
})();
