const landscapeMediaQuery = window.matchMedia('(orientation:landscape)')
const Contact = document.querySelector('#contact')



// Check if the media query is true
if (landscapeMediaQuery.matches) {
  Contact.addEventListener('click',()=>{
      alert('working')
  })
}