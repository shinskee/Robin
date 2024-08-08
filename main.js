//** Burger menu */

const burgerActive = document.querySelector('.burger')
const menuActive = document.querySelector('.nav')
const lockBody = document.body
const clickMenu = document.querySelectorAll('.nav__link')
const heroContent = document.querySelector('.hero__content')

burgerActive.addEventListener('click', () => {
    burgerActive.classList.toggle('active');
    menuActive.classList.toggle('active');
    lockBody.classList.toggle('lock');
    heroContent.classList.toggle('zindex')
})

clickMenu.forEach(element => {
    element.addEventListener('click', () => {
        lockBody.classList.remove('lock')
        menuActive.classList.remove('active')
        burgerActive.classList.remove('active')
        heroContent.classList.remove('zindex')

    })
});

//** Gallery */
// Fancybox.bind('[data-fancybox]', {
//   Thumbs: false,
// });

// new Carousel(document.getElementById("myCarousel"), {
//   slidesPerPage: 'auto',
//   dragFree: true,
//   Dots: false,
//   center: false,
    
//   },
// );

//** Скролл вверх по кнопке */

const scrollTop = document.querySelector('.scroll-top')

if(scrollTop) {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
      scrollTop.classList.add('visible')
    }
    else {
      scrollTop.classList.remove('visible')
    }
  })
}

//** Плавный скролл GSAP */

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// if (ScrollTrigger.isTouch !==1) {
//   let smoother = ScrollSmoother.create({
//     wrapper: '.wrapper',
//     content: '.content',    
//     smooth: 1,
//     effects: true,
//   })

//** Скролл по кнопкам меню GSAP */
  // const navLinks = document.querySelectorAll(".nav a")

  // let Linker = navLinks.forEach(link => {
  //   link.addEventListener('click', () => {
  //     Linker = link.getAttribute("href")
  //     smoother.scrollTo(Linker, true, 'center center')
  //   })
  // })

//** Кнопка сколла вверх GSAP */
// scrollTop.addEventListener('click', () => {
//   smoother.scrollTo('.header', true, 'center center')
// })

//** Анимация появления блоков */

  // gsap.from('.hero__title', {
  //   opacity: 0,
  //   duration: 1,
  //   delay: 0.4
  // })

  // gsap.fromTo('.header', {opacity: 1}, {
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: '.header',
  //     start: 'center',
  //     end: 'bottom',
  //     scrub: true,
  //   }
  // })
// }

// //** Дропдаун селектор */

// const dropdownButton = document.querySelector('.dropdown__button')
// const dropdownList = document.querySelector('.dropdown__list')
// const dropdownItem = document.querySelectorAll('.dropdown__list-item')
// const dropdownInput = document.querySelector('.dropdown__list-input')
// const dropdownArrow = document.querySelector('.finder__item span')


// dropdownButton.addEventListener('click', () => {
//   dropdownList.classList.toggle('active')
//   dropdownArrow.classList.toggle('dropdown__arrow-up')
// })

// dropdownItem.forEach(item => {
//   item.addEventListener('click', (e) => {
//     e.stopPropagation()
//     dropdownButton.innerText = item.innerText
//     dropdownInput.value = item.dataset.value
//     dropdownList.classList.remove('active')
//     dropdownArrow.classList.remove('dropdown__arrow-up')
//     dropdownButton.focus()
//   })
// });

// document.addEventListener('click', (e) => {
//   if (e.target !== dropdownButton) {
//     dropdownList.classList.remove('active')
//     dropdownArrow.classList.remove('dropdown__arrow-up')
//   }
// })

//     //** Клик по клавише Tab и Escape */
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Tab' || e.key === 'Escape') {
//     dropdownList.classList.remove('active')
//     dropdownArrow.classList.remove('dropdown__arrow-up')
//   }
// })

if (ScrollTrigger.isTouch !==1) {
    let smoother = ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',    
      smooth: 1,
      effects: true,
    })

    // ** Скролл по кнопкам меню GSAP */
  const navLinks = document.querySelectorAll(".nav a")

  let Linker = navLinks.forEach(link => {
    link.addEventListener('click', () => {
      Linker = link.getAttribute("href")
      smoother.scrollTo(Linker, true, 'center center')
    })
  })

  // ** Кнопка сколла вверх GSAP */
scrollTop.addEventListener('click', () => {
  smoother.scrollTo('.header', true, 'center center')
})

// gsap.from('.hero', {
//     opacity: 0,
//     duration: 1,
//     delay: 0.4
//   })

// gsap.fromTo('.header', {opacity: 1}, {
//     opacity: 0,
//     scrollTrigger: {
//       trigger: '.header',
//       start: 'center',
//       end: 'bottom',
//       scrub: true,
//     }
//   })

  gsap.fromTo('.project__header', {opacity: 0, x:-500}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.brand',
      scrub: true,
    }
  })

  gsap.fromTo('.project__right', {opacity: 0, x:500}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.brand',
      end: 'bottom',
      scrub: true,
    }
  })

  // gsap.fromTo('.hero', {opacity: 1}, {
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: '.work',
  //     end: 'center',
  //     scrub: true,
  //   }
  // })

  let items = gsap.utils.toArray('.reviews__card')
  items.forEach(item => {
    gsap.fromTo(item, {opacity: 0, x:100}, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-700',
        end: '-100',
        scrub: true,
      }
    })
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: '.section__header--light',
      start: 'top',
      end: "+=400%",
      markers: false,
      pin: true,
    }
  })
}

// ** Gallery */
Fancybox.bind('[data-fancybox]', {
  Thumbs: false,
});

new Carousel(document.getElementById("myCarousel"), {
  slidesPerPage: 'auto',
  dragFree: true,
  Dots: false,
  center: false,
  },
);
new Carousel(document.getElementById("myCarousel2"), {
  slidesPerPage: 'auto',
  dragFree: true,
  Dots: false,
  center: false,
  },
);
new Carousel(document.getElementById("myCarousel3"), {
  slidesPerPage: 'auto',
  dragFree: true,
  Dots: false,
  center: false,
  },
);
new Carousel(document.getElementById("myCarousel4"), {
  slidesPerPage: 'auto',
  dragFree: true,
  Dots: false,
  center: false,
  },
);

//** Photography tabs change */

const tabsPhoto = document.querySelectorAll('.photography__tabs-item')
const cityPhoto = document.querySelectorAll('.photography__album-city')
const cityAust = document.querySelector('.--australia')

let tabsData = tabsPhoto.forEach(item => {
  item.addEventListener('click', () => {
    tabsData = item.dataset.div   
    cityPhoto.forEach(item => {
      if (item.dataset.div === tabsData) {
        item.classList.remove('visually-hidden')
      }
      else {
        item.classList.add('visually-hidden')
      }
    })
    })
})










  
  





  










