// refresh, when resizing window
var t=0,resizing=false;
    function _reload()
    {
      resizing=false;
      window.location.reload(true);
    }
    window.addEventListener('resize',function(){
      if(!resizing){
        resizing=true;
        t=setTimeout(_reload, 2000);
      }
    });

const track2 = document.querySelector('.carousel__track2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.carousel__button2--right');
const prevButton2 = document.querySelector('.carousel__button2--left');
const dotsNav2 = document.querySelector('.carousel__nav2');
const dots2 = Array.from(dotsNav2.children);

const slideWidth2 = slides2[0].getBoundingClientRect().width;


// arrange the slides2 next to one another
const setSlidePosition2 = (slide, index) => {
    slide.style.left = slideWidth2 * index + 'px'; 
};
slides2.forEach(setSlidePosition2);

const moveToSlide2 = (track2, currentSlide, targetSlide) => {
    track2.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide2');
    targetSlide.classList.add('current-slide2');
}

// update functions
const updateDots2 = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide2');
    targetDot.classList.add('current-slide2');
}

const hideShowArrows2 = (slides2, prevButton2, nextButton2, targetIndex) => {
    if (targetIndex === 0) {
        prevButton2.classList.add('is-hidden2');
        nextButton2.classList.remove('is-hidden2');
    } else if (targetIndex === slides2.length - 1) {
        prevButton2.classList.remove('is-hidden2');
        nextButton2.classList.add('is-hidden2');
    } else {
        prevButton2.classList.remove('is-hidden2');
        nextButton2.classList.remove('is-hidden2');
    }
}

// when I click left, move slides2 to the left
prevButton2.addEventListener('click', e => {
    const currentSlide = track2.querySelector('.current-slide2');
    const prevSlide = currentSlide.previousElementSibling;
    
    const currentDot = dotsNav2.querySelector('.current-slide2');
    const prevDot = currentDot.previousElementSibling;

    const prevIndex = slides2.findIndex(slide => slide === prevSlide);
    
    moveToSlide2(track2, currentSlide, prevSlide);
    updateDots2(currentDot, prevDot);
    hideShowArrows2(slides2, prevButton2, nextButton2, prevIndex);
});


// when I click right, move slides2 to the right
nextButton2.addEventListener('click', e => {
    const currentSlide = track2.querySelector('.current-slide2');
    const nextSlide = currentSlide.nextElementSibling;

    const currentDot = dotsNav2.querySelector('.current-slide2');
    const nextDot = currentDot.nextElementSibling;

    const nextIndex = slides2.findIndex(slide => slide === nextSlide);
    
    moveToSlide2(track2, currentSlide, nextSlide);
    updateDots2(currentDot, nextDot);
    hideShowArrows2(slides2, prevButton2, nextButton2, nextIndex);
});


// when I click the nav indicators, move to that slide
dotsNav2.addEventListener('click', e => {
    // what indicator was clicked on
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track2.querySelector('.current-slide2');
    const currentDot = dotsNav2.querySelector('.current-slide2');
    const targetIndex = dots2.findIndex(dot => dot === targetDot);
    const targetSlide = slides2[targetIndex];

    moveToSlide2(track2, currentSlide, targetSlide);
    updateDots2(currentDot, targetDot);
    hideShowArrows2(slides2, prevButton2, nextButton2, targetIndex);
   
});
