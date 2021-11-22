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
const media750px = window.matchMedia("(max-width:750px)")


run()
function run() {
    navBtnToggle()
    playVideo()

}

function navBtnToggle() {
    navBtn.onclick= () =>{
        listNavSide.classList.toggle('active')
    }
    closeNavBtn.onclick= () =>{
        listNavSide.classList.remove('active')

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