// MENU HAMBURGER
const hamburgerIcons = document.querySelectorAll('.hamburger__icon')
const navigationList = document.querySelector('.navigation__list')
const page = document.querySelector('.page')
let open = true

const showOrHideMenu = () => {
if (open) {
for (i = 0; i < hamburgerIcons.length; i++) {
hamburgerIcons[i].classList.toggle('hamburger__icon--on')}
navigationList.classList.toggle('navigation__list--off')
open = false
}
else if (open === false) {
for (i = 0; i < hamburgerIcons.length; i++) {
hamburgerIcons[i].classList.toggle('hamburger__icon--on')}
navigationList.classList.toggle('navigation__list--off')
open = true
}}
hamburgerIcons.forEach(hamburgerIcon => hamburgerIcon.addEventListener('click', showOrHideMenu))


// SCROLL TO SECTION

const navigationItems = document.querySelectorAll('li[data-number]')
const sections = document.querySelectorAll('.scroll')

navigationItems.forEach((navigationItem, index) => {
navigationItem.addEventListener('click', function (){
    navigationList.addEventListener('click', function() {
        if (open === false) {
        navigationList.classList.add('navigation__list--off')
        for (i = 0; i < hamburgerIcons.length; i++) {
            hamburgerIcons[i].classList.toggle('hamburger__icon--on')}
        }
        open = true
        })
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: sections[index].offsetTop
          })
})})

// SCROLL TO CONTACT SECTION

const contactBtn = document.querySelector('.button__contact')

const scrollToContact = () => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: sections[5].offsetTop
      })   
}
contactBtn.addEventListener('click', scrollToContact)

// ANIMATION OF TECHNOLOGIES

const skillsSection = document.querySelector('.skills')
const circlesOfTechnology = document.querySelectorAll('.technology__circle')
let flag = true

window.addEventListener('scroll', function(){
    let index = 0;
    let scrollPosition = window.scrollY
    let positionOfSkillsSection = sections[3].offsetTop
    if (scrollPosition >= (positionOfSkillsSection/1.3) && flag === true) {
        const addCircle = setInterval(function(){
            circlesOfTechnology[index].style.left = "0px"
            index++
            if (index >= circlesOfTechnology.length){
                clearInterval(addCircle)
            }
        },700)
        flag = false
    }
})

// TYPING EFFECT

const paragraphInProgress = document.querySelector('.projects__in-progress')
const text = "Section in progress...   "
let letter = 0;

const addLetter = setInterval(function(){
    if (letter < text.length) {
        paragraphInProgress.textContent += text[letter]}
    else {
        letter = -1
        paragraphInProgress.textContent = ""}
    letter++}
    ,300)

// SCROLL UP BUTTON

const arrowBtn = document.querySelector('.navigation__arrow')

window.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY
    let positionOfAboutSection = sections[1].offsetTop
if(scrollPosition >= positionOfAboutSection){
    arrowBtn.classList.remove('navigation__arrow-off')
    arrowBtn.addEventListener('click', function(){
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: sections[0].offsetTop
          })     
    })}
    else
    arrowBtn.classList.add('navigation__arrow-off')
})