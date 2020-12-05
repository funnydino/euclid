window.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('.header');
  const menu = document.querySelector('#menu');
  const body = document.body;
  const hero = document.querySelector('.hero');
  const container = document.querySelector('.container');
  let fixedBlocks = document.querySelectorAll('.fixed-block');
  navToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Disable and Enable Scroll

    function disableScroll() {
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      let pagePosition = window.scrollY;
      body.classList.add('scroll-disable');
      body.dataset.position = pagePosition;
      body.style.top = -pagePosition + 'px';
      header.style.top = pagePosition + 'px';
      menu.style.height = header.offsetHeight + hero.offsetHeight + 'px';
      menu.style.left = -parseInt(window.getComputedStyle(container).paddingLeft) + 'px';
      // fixedBlocks.forEach((el) => {
      //   el.style.paddingRight = paddingOffset;
      // });
      body.style.paddingRight = paddingOffset;
    }

    function enableScroll() {
      let pagePosition = parseInt(body.dataset.position, 10);
      body.style.top = 'auto';
      header.style.top = 'auto';
      body.classList.remove('scroll-disable');
      window.scroll({
        top: pagePosition,
        left: 0
      });
      body.removeAttribute('data-position');
      menu.style.height = 'auto';
      menu.style.left = 'auto';
      // fixedBlocks.forEach((el) => {
      //   el.style.paddingRight = '0px';
      // });
      body.style.paddingRight = '0px';
    }

    if (document.querySelector('#menu').classList.contains('active')) {
      disableScroll();
    } else {
      enableScroll();
    }
  })
});

// jQuery:

//   $('.nav-toggle').on('click', function () {
//     $('#menu').toggleClass('active');
//   });

// $('.nav-toggle').on('click', function () {
//   $('.nav-toggle').toggleClass('active');
// });

$("[data-collapse]").on('click', function (event) {
  event.preventDefault();
  let $this = $(this);
  $this.toggleClass("active");
});

$("[data-collapse]").keypress(' ', function (event) {
  event.preventDefault();
  let $this = $(this);
  $this.toggleClass("active");
});

// Fixed Header

$(function () {
  let header = $(".header"),
    body = $(".body"),
    footerH = $('.footer').innerHeight(),
    heroH = $(".hero").innerHeight() + $(".header").innerHeight();
  scrollOffset = $(window).scrollTop();
  console.log(footerH);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= heroH) {
      header.addClass("fixed");
      body.css({
        'paddingTop': header.innerHeight()
      });
      header.css({
        'marginTop': -header.innerHeight()
      });
    } else {
      header.removeClass("fixed");
      body.css({
        'paddingTop': 0
      });
      header.css({
        'marginTop': 0
      });
    }
  }
})

// Swiper:

window.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Autoplay
    autoplay: {
      delay: 5000,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})