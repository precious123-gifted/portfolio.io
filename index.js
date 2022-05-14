const landscapeMediaQuery = window.matchMedia('(orientation:landscape)')
const Contact = document.querySelector('#contact')
const menu = document.querySelector('.contactMenu')
const exitIcon = document.querySelector('.ex')

const slideMenuIn = ()=>{
    menu.style.animation = 'slidein 1.01s ease'
    setTimeout(()=>{ menu.style.left = '77%'},1000)
}

const slideMenuOut = ()=>{
    menu.style.animation = 'slideout 1.01s ease'
    setTimeout(()=>{ menu.style.left = '100%'},1000)
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