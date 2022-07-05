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