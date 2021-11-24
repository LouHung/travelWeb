const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const srcVideo = $('.packages__video-content__srcVideo')
const body = $('body')
const playVideoBtn = $('.packages__video-content')
const mainPicContainer = $('.main-pic')
const video = $('.packages__video-content__srcVideo-item')
const navBtn = $('.header__logo-brand__navBtn')
const listNavSide = $('.header__navbar-flow__container')
const closeNavBtn = $('.header__navbar-flow__iconClose')
const background = $('.blackBackground')
const media750px = window.matchMedia("(max-width:750px)")
const linkNavBar = $('.header__navbar-flow__item-name')
const btnCloseArr = [background,closeNavBtn,linkNavBar]


switch(body.classList.value){
    case 'aboutUs': 
    playVideo()
    openNavMenu()
    closeNavMenu()
        break;
    case 'shop': 
    openNavMenu()
    closeNavMenu()
        break;
    case 'home': 
    playVideo()
    openNavMenu()
    closeNavMenu()
        break;  
    case 'packages': 
    openNavMenu()
    closeNavMenu()
        break;   
    case 'ourNews':
    openNavMenu()
    closeNavMenu()
        break;
    case 'contact':
    openNavMenu()
    closeNavMenu()
        break;
}

function closeNavMenu() {

    btnCloseArr.forEach((btn)=>{
        btn.onclick= () =>{
            listNavSide.classList.remove('active')
            background.classList.remove('active')
            body.style.overflow = 'auto'
        }
    })

    
}

function openNavMenu() {
    
    navBtn.onclick= () =>{
        background.classList.add('active')
        listNavSide.classList.add('active')
        body.style.overflow = 'hidden'

    }
   
    
}

function playVideo(){
    playVideoBtn.onclick = function() {
        srcVideo.style.display='flex'
        body.style.overflow = 'hidden'
       
    }
    
    srcVideo.onclick = function() {
        srcVideo.style.display='none'
        body.style.overflow = 'auto'
        var iframeSrc = video.src;
            video.src = iframeSrc;
    }
}

function toggleBackground(){
    
    
}