const Hover = document.querySelectorAll('.project-item-content')
    console.log(Hover)
    Hover.forEach((item)=>{
    item.classList.add('js')    
})

//////// BUTTONS DA DESCRÇÃO DOS PROJETOS
const imgsButtons = document.querySelectorAll('.js-imgButton')
const arrowButtons = document.querySelectorAll('.button-open-project-description')
const sizeScreen = window.innerWidth

const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
  imgsButtons.forEach((item)=>{
    item.classList.remove('open-button')    
  })
  arrowButtons.forEach((item)=>{
    item.classList.add('open-button')    
  })
} else {
  imgsButtons.forEach((item)=>{
    item.classList.add('open-button')    
  })
  arrowButtons.forEach((item)=>{
    item.classList.remove('open-button')    
  })
}





const openButton = document.querySelectorAll(
  ".open-button"
);
const closeButton = document.querySelectorAll(".close-button");
const description = document.querySelectorAll(".project-item-content");

function openDescription(index) {
  description[index].classList.toggle("hover");
  openButton[index].classList.toggle("hover");
}

openButton.forEach((iten, index) => {
  iten.addEventListener("click", () => {
    openDescription(index);
  });
});

closeButton.forEach((iten, index) => {
  iten.addEventListener("click", () => {
    openDescription(index);
  });
});

//scroll

const linksHeaderMenu = document.querySelectorAll('.header-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const hrefLink = event.currentTarget.getAttribute("href");
  const section = document.querySelector(hrefLink);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

linksHeaderMenu.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

//Light Sabe animation

const sectionSkills = document.querySelector(".skills");
const skill = document.querySelectorAll(".saber-light span");
const windowHalf = window.innerHeight * 0.6;
console.log(skill);

function activeSkillsAnimation() {
  const sectionTop = sectionSkills.getBoundingClientRect().top;
  const isSectionVisible = sectionTop - windowHalf < 0;
  if (isSectionVisible) {
    skill.forEach((item) => {
      item.classList.add("js-lightSaber-animation");
    });
  }
}

window.addEventListener("scroll", activeSkillsAnimation);



const body = document.querySelector("body");
body.classList.add("js");


