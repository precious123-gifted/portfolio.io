const landscapeMediaQuery = window.matchMedia('(orientation:landscape)')
const portraitMediaQuery = window.matchMedia('(orientation:portrait)')
const Contact = document.querySelector('#contact')
const menu = document.querySelector('.contactMenu')
const contDiv = document.querySelector('.cont')
const exitIcon = document.querySelector('.ex')
const menuIcon = document.querySelector('.menu')
const Cts = document.querySelector('#cts')
const cont1 = document.querySelector('.cont1')
const cont2 = document.querySelector('.cont2')
const workBTN = document.querySelector('#work')
const resumeBTN = document.querySelector('#resume')
const workbtn = document.querySelector('#wk')
const resumebtn = document.querySelector('#re')
const header = document.querySelector('.header')
const workNresumePage = document.querySelector('.workAndResume')
const workPage = document.querySelector('.workPage')
const resumePage = document.querySelector('.resumePage')
const Pages = document.querySelector('.pages')
const logo = document.querySelector('.logo')
const checkMyWorkBtn = document.querySelector('.workbtn')



gsap.registerPlugin(ScrollToPlugin);


logo.addEventListener('click',()=>{
gsap.to(Pages, {duration: 1, scrollTo : header})
})
document.addEventListener('click',(e)=>{
    if(e.target === workbtn || e.target === workBTN ||e.target === checkMyWorkBtn ){
    gsap.to(Pages, {duration: 1, scrollTo : workNresumePage})    
    }
})


const slideMenuIn = ()=>{
    // @ts-ignore
    menu.style.animation = 'slidein 1.0s ease'
    // @ts-ignore
    setTimeout(()=>{ menu.style.marginRight = '0px'},.0900)
}




const slideMenuOut = ()=>{
    // @ts-ignore
    menu.style.animation = 'slideout 1.0s ease'
    // @ts-ignore
    setTimeout(()=>{ menu.style.marginRight = '-320px'},.0900)
}


Cts.addEventListener('click',(e)=>{
   
    gsap.to(contDiv, {duration: 0.8,scrollTo:cont1})
})

// Check if the media query is true for desktop view
if (landscapeMediaQuery.matches) {
  Contact.addEventListener('click',()=>{
      slideMenuIn()
   })

   exitIcon.addEventListener('click',()=>{
       slideMenuOut()
   })
}
//mobile view
if (portraitMediaQuery.matches) {
  menuIcon.addEventListener('click',()=>{
      slideMenuIn()
   })

   exitIcon.addEventListener('click',()=>{
       slideMenuOut()
   })


   cont1.addEventListener('touchstart', handleTouchStart, false);
    cont1.addEventListener('touchmove', handleTouchMove, false);
    cont1.addEventListener('touchend', handleTouchEndForCont1, false);

}

function handleTouchEndForCont1(e) {

        // if the user released on a different target, cancel!
        if (startEl !== e.target) return;

        var swipeThreshold = parseInt(getNearestAttribute(startEl, 'data-swipe-threshold', '20'), 10); // default 20px
        var swipeTimeout = parseInt(getNearestAttribute(startEl, 'data-swipe-timeout', '500'), 10);    // default 500ms
        var timeDiff = Date.now() - timeDown;
        var eventType = '';
        var changedTouches = e.changedTouches || e.touches || [];

        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (xDiff > 0) {
                    eventType = 'swiped-left';
                }
                else {
                    eventType = 'swiped-right';
                     gsap.to(contDiv, {duration: 0.8,scrollTo:cont2})
                }
            }
        }
        else if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
            if (yDiff > 0) {
                eventType = 'swiped-up';
            }
            else {
                eventType = 'swiped-down';
            }
        }

        if (eventType !== '') {

            var eventData = {
                dir: eventType.replace(/swiped-/, ''),
                touchType: (changedTouches[0] || {}).touchType || 'direct',
                xStart: parseInt(xDown, 10),
                xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),
                yStart: parseInt(yDown, 10),
                yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10)
            };

            // fire `swiped` event event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent('swiped', { bubbles: true, cancelable: true, detail: eventData }));

            // fire `swiped-dir` event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true, detail: eventData }));
        }

        // reset values
        xDown = null;
        yDown = null;
        timeDown = null;
    }





// code for swipe up swipe down swipe left swipe right
//assigning touchevent
//gettting the current position of touch
    menu.addEventListener('touchstart', handleTouchStart, false);
    menu.addEventListener('touchmove', handleTouchMove, false);
    menu.addEventListener('touchend', handleTouchEnd, false);

    var xDown = null;
    var yDown = null;
    var xDiff = null;
    var yDiff = null;
    var timeDown = null;
    var startEl = null;


function handleTouchEnd(e) {

        // if the user released on a different target, cancel!
        if (startEl !== e.target) return;

        var swipeThreshold = parseInt(getNearestAttribute(startEl, 'data-swipe-threshold', '20'), 10); // default 20px
        var swipeTimeout = parseInt(getNearestAttribute(startEl, 'data-swipe-timeout', '500'), 10);    // default 500ms
        var timeDiff = Date.now() - timeDown;
        var eventType = '';
        var changedTouches = e.changedTouches || e.touches || [];

        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (xDiff > 0) {
                    eventType = 'swiped-left';
                }
                else {
                    eventType = 'swiped-right';
                    slideMenuOut()
                }
            }
        }
        else if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
            if (yDiff > 0) {
                eventType = 'swiped-up';
            }
            else {
                eventType = 'swiped-down';
            }
        }

        if (eventType !== '') {

            var eventData = {
                dir: eventType.replace(/swiped-/, ''),
                touchType: (changedTouches[0] || {}).touchType || 'direct',
                xStart: parseInt(xDown, 10),
                xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),
                yStart: parseInt(yDown, 10),
                yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10)
            };

            // fire `swiped` event event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent('swiped', { bubbles: true, cancelable: true, detail: eventData }));

            // fire `swiped-dir` event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true, detail: eventData }));
        }

        // reset values
        xDown = null;
        yDown = null;
        timeDown = null;
    }

    /**
     * Records current location on touchstart event
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchStart(e) {

        // if the element has data-swipe-ignore="true" we stop listening for swipe events
        if (e.target.getAttribute('data-swipe-ignore') === 'true') return;

        startEl = e.target;

        timeDown = Date.now();
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
        xDiff = 0;
        yDiff = 0;
    }

    /**
     * Records location diff in px on touchmove event
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchMove(e) {

        if (!xDown || !yDown) return;

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }

    /**
     * Gets attribute off HTML element or nearest parent
     * @param {object} el - HTML element to retrieve attribute from
     * @param {string} attributeName - name of the attribute
     * @param {any} defaultValue - default value to return if no match found
     * @returns {any} attribute value or defaultValue
     */
    function getNearestAttribute(el, attributeName, defaultValue) {

        // walk up the dom tree looking for attributeName
        while (el && el !== document.documentElement) {

            var attributeValue = el.getAttribute(attributeName);

            if (attributeValue) {
                return attributeValue;
            }

            el = el.parentNode;
        }

        return defaultValue;
    }
// code for swipe up swipe down swipe left swipe right

