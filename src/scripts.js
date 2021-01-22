/********************** LANDS HOME SLIDESHOW ***********************/

(function() {
  window.addEventListener('load', () => {
    const slides = document.getElementById('landsHomeSlideshow').children;  
    let slide = 0;
    let previous;
    (function runSlides() {
      slides[slide].style.opacity = '1';
      if (previous)
        previous.style.opacity = '0';
      previous = slides[slide];
      slide++;
      if (slide >= slides.length)
        slide = 0;
      setTimeout(runSlides, 4000);
    })();
  });
})();


/************************ TRY LANDS BUTTON *************************/

// (function() {
//   function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function() {
//       var context = this, args = arguments;
//       var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       var callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   }
//   function changeOnScroll() {
//     if (window.scrollY > tryLandsBtn.getBoundingClientRect().top) {
//       if (!tryLandsBtn.classList.contains('side')) {
//         tryLandsBtn.classList.add('side');
//       }
//     } else {
//       tryLandsBtn.classList.remove('side');
//     }
//   }
//   const tryLandsBtn = document.getElementById('tryLandsHomeBtn');
//   window.addEventListener('scroll', debounce(changeOnScroll));
// })();


/************************ WHY LANDS VIDEOS *************************/

(function() {
  window.addEventListener('load', () => {       
    const whyLandsVideos = document.querySelectorAll('#whyUseLands .item');
    if (window.matchMedia('(any-hover: hover)').matches) { // another option => hover: hover
      console.log('There is hover.');
      let current;
      whyLandsVideos.forEach(item => {
        item.classList.remove('nohover');
        item.querySelector('video').removeAttribute('controls');
        item.addEventListener('mouseenter', () => {
          if (current) {
            if (current.dataset.name !== item.dataset.name) {
              current.classList.remove('play');
              current.querySelector('video').pause();
              current = item;
              current.classList.add('play');
              current.querySelector('video').play();
            }
          } else {
            current = item;
            current.classList.add('play');
            current.querySelector('video').play();
          }
        });
      });
    } else {
      console.log('There is no hover.');
    }
  });
})();
