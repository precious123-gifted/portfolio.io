const landscapeMediaQuery = window.matchMedia('(orientation:landscape)')
const portraitMediaQuery = window.matchMedia('(orientation:portrait)')
const Contact = document.querySelector('#contact')
const menu = document.querySelector('.contactMenu')
const exitIcon = document.querySelector('.ex')
const menuIcon = document.querySelector('.menu')

const slideMenuIn = ()=>{
    // @ts-ignore
    menu.style.animation = 'slidein 1.01s ease'
    // @ts-ignore
    setTimeout(()=>{ menu.style.marginRight = '0px'},1000)
}




const slideMenuOut = ()=>{
    // @ts-ignore
    menu.style.animation = 'slideout 1.01s ease'
    // @ts-ignore
    setTimeout(()=>{ menu.style.marginRight = '-320px'},1000)
}

// Check if the media query is true
if (landscapeMediaQuery.matches) {
  Contact.addEventListener('click',()=>{
      slideMenuIn()
   })

   exitIcon.addEventListener('click',()=>{
       slideMenuOut()
   })
}

if (portraitMediaQuery.matches) {
  menuIcon.addEventListener('click',()=>{
      slideMenuIn()
   })

   exitIcon.addEventListener('click',()=>{
       slideMenuOut()
   })
}