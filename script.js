const openButton = document.querySelectorAll('.button-open-project-description')
const closeButton = document.querySelectorAll('.close-button')
const description = document.querySelectorAll('.project-item-content')

function openDescription(index) {

  description[index].classList.toggle('hover')
  openButton[index].classList.toggle('hover')
}

openButton.forEach((iten, index) => {
  iten.addEventListener('click', () => {
    openDescription(index)
  })
})

closeButton.forEach((iten, index) => {
  iten.addEventListener('click', () => {
    openDescription(index)
  })
})


//scroll

const linksHeaderMenu = document.querySelectorAll('.header-menu a[href^="#"]')

function scrollToSection(event){
  event.preventDefault()
  const hrefLink = event.currentTarget.getAttribute('href')
  const section = document.querySelector(hrefLink)
  section.scrollIntoView({
    behavior: 'smooth',
  })
}

linksHeaderMenu.forEach((link)=>{
  link.addEventListener('click', scrollToSection)
})