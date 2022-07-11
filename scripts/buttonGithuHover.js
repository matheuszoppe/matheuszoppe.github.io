const githubButton = document.querySelector(".githubButton")
const githubButtonImg = document.querySelector(".githubButton img")

function changeImgButtonToWhite(){  
  githubButtonImg.setAttribute('src', './assets/Github_white_s.svg')
  document.getElementById('githubButton').style.backgroundColor = "var(--cor-5)"
  
}

function changeImgButtonToBlack(){  
  githubButtonImg.setAttribute('src', './assets/Github_black_s.svg')
  document.getElementById('githubButton').style.backgroundColor = "#fff"
}

githubButton.addEventListener('mouseover', changeImgButtonToWhite)

githubButton.addEventListener('mouseout', changeImgButtonToBlack)
