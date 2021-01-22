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



// Set by default the gifs and in case there is hover replace for posters

(function() {
  window.addEventListener('load', () => {
    // const assets = {
    //   terrains: {
    //     poster: '/wp-content/uploads/2020/01/terrainsPoster.png',
    //     animat: '/wp-content/uploads/2019/12/TerrainOperations.gif'
    //   },
    //   lim: {
    //     poster: '/wp-content/uploads/2020/01/limPoster.png',
    //     animat: '/wp-content/uploads/2019/12/LandsBIM.gif'
    //   },
    //   plants: {
    //     poster: '/wp-content/uploads/2020/01/plants.jpg',
    //     animat: '/wp-content/uploads/2019/12/LandsPlantsDatabase.gif'
    //   },
    //   documentation: {
    //     poster: '/wp-content/uploads/2020/01/documentation.png',
    //     animat: '/wp-content/uploads/2020/01/documentation.gif'
    //   },
    //   parametric: {
    //     poster: '/wp-content/uploads/2020/01/parametric.png',
    //     animat: '/wp-content/uploads/2019/12/LandsParametricDesign.gif'
    //   },
    //   presentation: {
    //     poster: '/wp-content/uploads/2020/01/presentation.jpg',
    //     animat: '/wp-content/uploads/2020/01/liveYourProject.gif'
    //   },
    //   collaboration: {
    //     poster: '/wp-content/uploads/2020/01/interoperability.png',
    //     animat: '/wp-content/uploads/2020/01/interoperability.gif'
    //   }
    // }
    const assets = {
      terrains: {
        poster: './imgs/terrainsPoster.png',
        animat: './videos/TerrainOperations.gif'
      },
      lim: {
        poster: './imgs/limPoster.png',
        animat: './videos/LandsBIM.gif'
      },
      plants: {
        poster: './imgs/plants.jpg',
        animat: './videos/LandsPlantsDatabase.gif'
      },
      documentation: {
        poster: './imgs/documentation.png',
        animat: './videos/documentation.gif'
      },
      parametric: {
        poster: './imgs/parametric.png',
        animat: './videos/LandsParametricDesign.gif'
      },
      presentation: {
        poster: './imgs/presentation.jpg',
        animat: './videos/liveYourProject.gif'
      },
      collaboration: {
        poster: './imgs/interoperability.png',
        animat: './videos/interoperability.gif'
      }
    }    
    const whyLandsVideos = document.querySelectorAll('#whyUseLands .item');
    if (window.matchMedia('(hover: hover)').matches) {
      console.log('There is hover.');
      let current;
      whyLandsVideos.forEach(item => {
        item.addEventListener('mouseenter', () => {
          if (current) {
            if (current.dataset.name !== item.dataset.name) {
              current.classList.remove('play');
              current.querySelector('img').src = assets[current.dataset.name].poster;
              current = item;
              current.classList.add('play');
              current.querySelector('img').src = assets[current.dataset.name].animat;
            }
          } else {
            current = item;
            current.classList.add('play');
            current.querySelector('img').src = assets[current.dataset.name].animat;
          }
        });
      });
    } else {
      // This could be set by default in case matchMedia doesnt work?
      console.log('Cannot hover.');
      whyLandsVideos.forEach(item => {
        item.querySelector('img').src = assets[item.dataset.name].animat;
      });
    }
  });
})();
