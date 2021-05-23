'use strict';

(() => {

  window.addEventListener('DOMContentLoaded', function () {

    const navToggle = document.querySelector('.nav-toggle');
    const header = document.querySelector('.header');
    const menu = document.querySelector('#menu');
    const body = document.body;
    const page = document.querySelector('.page');
    const hero = document.querySelector('.hero');
    const container = document.querySelector('.container');
    const slider = document.querySelector('.slider');
    const slidesContainer = document.querySelector('.slider__slides');
    const slides = document.querySelectorAll('.slider__slide');
    const fixedBlocks = document.querySelectorAll('.fixed-block');
    const questionsList = document.querySelectorAll('.questions-list__item');

    const timeout = 200;

    // Mobile Menu:

    navToggle.addEventListener('click', function () {

      menu.classList.toggle('active');

      if (menu.classList.contains('active')) {
        menuOpen();
        disableScroll();
        navToggle.classList.add('active');
      } else {
        setTimeout(menuClose, timeout);
        enableScroll();
        navToggle.classList.remove('active');
      }
    });

    const menuOpen = () => {
      menu.style.height = '100vh';
    };

    const menuClose = () => {
      menu.style.height = 'auto';
    };

    // Disable and Enable Scroll:

    function disableScroll() {
      const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      const pagePosition = window.scrollY;
      body.classList.add('scroll-disable');
      body.dataset.position = pagePosition;
      body.style.top = -pagePosition + 'px';
      header.style.top = pagePosition + 'px';
      // fixedBlocks.forEach((el) => {
      //   el.style.paddingRight = paddingOffset;
      // });
      body.style.paddingRight = paddingOffset;
      console.log('Scroll disabled!');
    };

    function enableScroll() {
      const pagePosition = parseInt(body.dataset.position, 10);
      body.style.top = 'auto';
      header.style.top = 'auto';
      body.classList.remove('scroll-disable');
      window.scroll({
        top: pagePosition,
        left: 0
      });
      body.removeAttribute('data-position');
      // fixedBlocks.forEach((el) => {
      //   el.style.paddingRight = '0px';
      // });
      body.style.paddingRight = '0px';
      console.log('Scroll enabled!');
    };

    // Slider Animation:

    let offset = 0;
    let slidesWidth;
    const delay = 5000;

    const sliderWidth = () => {
      slidesWidth = slider.offsetWidth;
      slidesContainer.style.width = slidesWidth * slides.length + 'px';
      slides.forEach((el) => {
        el.style.width = slider.offsetWidth + 'px';
      });
    };

    sliderWidth();

    // const onResize = () => {
    //   sliderWidth();
    //   offset = 0;
    //   slidesContainer.style.left = 0;
    // };

    let timerId = setTimeout(function animation() {
      offset -= slidesWidth;
      if (-offset > slidesWidth * (slides.length - 1)) {
        offset = 0;
      };
      slidesContainer.style.left = offset + 'px';
      timerId = setTimeout(animation, delay);
    }, delay);

    // How we Works Tabs:

    document.querySelectorAll('.step-link').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path;
        document.querySelectorAll('.works-info').forEach(function (tabContent) {
          tabContent.classList.remove('works-info__active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('works-info__active');
        document.querySelectorAll('.step-link').forEach(function (tabBtn) {
          tabBtn.classList.remove('active');
        });
        document.querySelector(`[data-path="${path}"]`).classList.add('active');
      });
    });

    // Questions Section Accordion:

    questionsList.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        el.classList.toggle('active');
      });
      el.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          el.classList.toggle('active');
        };
      });
    });

    // Fixed Header:

    const headerHeight = header.offsetHeight;
    const heroHeight = hero.offsetHeight;

    const myFunction = () => {
      if (window.pageYOffset >= headerHeight && window.pageYOffset < heroHeight) {
        header.classList.add('header--hidden');
      } else if (window.pageYOffset >= heroHeight) {
        header.classList.remove('header--hidden');
        header.classList.add('header--fixed');
        header.style.marginTop = -header.offsetHeight + 'px';
        page.style.paddingTop = header.offsetHeight + 'px';
      } else {
        header.classList.remove('header--hidden');
        header.classList.remove('header--fixed');
      };
    };

    window.addEventListener('scroll', function () {
      myFunction();
    });

    // window.addEventListener('resize', function () {
    //   onResize;
    // });

  });

})();