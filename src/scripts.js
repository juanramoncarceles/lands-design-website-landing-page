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

// (function() {
//   const whyLandsVideos = document.querySelectorAll('#whyUseLands .item');
//   let current;
//   whyLandsVideos.forEach(item => {
//     item.addEventListener('mouseenter', () => {
//       if (current && current.dataset.name !== item.dataset.name) {
//         current.querySelector('video').style.opacity = '0.6';
//         current.querySelector('video').pause();
//       }
//       current = item;
//       current.querySelector('video').style.opacity = '1';
//       current.querySelector('video').play();
//     });
//   });
// })();