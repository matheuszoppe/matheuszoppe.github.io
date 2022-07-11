const sections = document.querySelectorAll('.js-scroll-animation')
const windowPosition = window.innerHeight * 0.6;

function activeScrollAnimation(){
  sections.forEach((item)=>{
    const sectionTop = item.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowPosition < 0;
    if (isSectionVisible) {      
        item.classList.add("active-scroll-animation");     
    }
  })
}  


window.addEventListener("scroll", activeScrollAnimation);