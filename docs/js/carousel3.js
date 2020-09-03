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

const track3 = document.querySelector('.carousel__track3');
const slides3 = Array.from(track3.children);
const nextButton3 = document.querySelector('.carousel__button3--right');
const prevButton3 = document.querySelector('.carousel__button3--left');
const dotsNav3 = document.querySelector('.carousel__nav3');
const dots3 = Array.from(dotsNav3.children);

const slideWidth3 = slides3[0].getBoundingClientRect().width;


// arrange the slides3 next to one another
const setSlidePosition3 = (slide, index) => {
    slide.style.left = slideWidth3 * index + 'px'; 
};
slides3.forEach(setSlidePosition3);

const moveToSlide3 = (track3, currentSlide, targetSlide) => {
    track3.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide3');
    targetSlide.classList.add('current-slide3');
}

// update functions
const updatedots3 = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide3');
    targetDot.classList.add('current-slide3');
}

const hideShowArrows3 = (slides3, prevButton3, nextButton3, targetIndex) => {
    if (targetIndex === 0) {
        prevButton3.classList.add('is-hidden3');
        nextButton3.classList.remove('is-hidden3');
    } else if (targetIndex === slides3.length - 1) {
        prevButton3.classList.remove('is-hidden3');
        nextButton3.classList.add('is-hidden3');
    } else {
        prevButton3.classList.remove('is-hidden3');
        nextButton3.classList.remove('is-hidden3');
    }
}

// when I click left, move slides3 to the left
prevButton3.addEventListener('click', e => {
    const currentSlide = track3.querySelector('.current-slide3');
    const prevSlide = currentSlide.previousElementSibling;
    
    const currentDot = dotsNav3.querySelector('.current-slide3');
    const prevDot = currentDot.previousElementSibling;

    const prevIndex = slides3.findIndex(slide => slide === prevSlide);
    
    moveToSlide3(track3, currentSlide, prevSlide);
    updatedots3(currentDot, prevDot);
    hideShowArrows3(slides3, prevButton3, nextButton3, prevIndex);
});


// when I click right, move slides3 to the right
nextButton3.addEventListener('click', e => {
    const currentSlide = track3.querySelector('.current-slide3');
    const nextSlide = currentSlide.nextElementSibling;

    const currentDot = dotsNav3.querySelector('.current-slide3');
    const nextDot = currentDot.nextElementSibling;

    const nextIndex = slides3.findIndex(slide => slide === nextSlide);
    
    moveToSlide3(track3, currentSlide, nextSlide);
    updatedots3(currentDot, nextDot);
    hideShowArrows3(slides3, prevButton3, nextButton3, nextIndex);
});


// when I click the nav indicators, move to that slide
dotsNav3.addEventListener('click', e => {
    // what indicator was clicked on
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track3.querySelector('.current-slide3');
    const currentDot = dotsNav3.querySelector('.current-slide3');
    const targetIndex = dots3.findIndex(dot => dot === targetDot);
    const targetSlide = slides3[targetIndex];

    moveToSlide3(track3, currentSlide, targetSlide);
    updatedots3(currentDot, targetDot);
    hideShowArrows3(slides3, prevButton3, nextButton3, targetIndex);
   
});
