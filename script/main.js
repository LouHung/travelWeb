// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)
// const srcVideo = $('.packages__video-content__srcVideo')
// const body = $('body')
// const playVideoBtn = $('.packages__video-content')
// const mainPicContainer = $('.main-pic')
// const video = $('.packages__video-content__srcVideo-item')
// const navBtn = $('.header__logo-brand__navBtn')
// const listNavSide = $('.header__navbar-flow__container')
// const closeNavBtn = $('.header__navbar-flow__iconClose')
// const media750px = window.matchMedia("(max-width:750px)")
let length = 0
let btnPrev = $('.main-pic__switchPageIcon__prev')
let btnNext = $('.main-pic__switchPageIcon__next')
let mainPicArr=['asset/img/slide-01.jpg','asset/img/slide-02.jpg']
let mainPic = $('.main-pic__item')
mainPic.style.backgroundImage = `url(${mainPicArr[0]})`






run()
function run() {
    mainPicSwitcher()
}
var barslide = $(".bar_slide")

function mainPicSwitcher() {
    document.documentElement.style.setProperty('--width_slideBar',"100%")
    
    let autoplay=setInterval(()=>{
        document.documentElement.style.setProperty('--width_slideBar',"0%")
        document.documentElement.style.setProperty('--transition-slideBar',"none")
        

        length++
        if(length >= mainPicArr.length){
            length=0
        }
        setTimeout(function(){
    // document.documentElement.style.setProperty('--width_slideBar',"100%")

            if(media750px.matches){
                mainPic.style.backgroundImage = `url(${mainPicArr[length]})`
            }else{
            mainPic.style.backgroundImage = `url(${mainPicArr[length]})`
            mainPic.innerHTML = ` 
            
    
            <div class="grid2 main-pic__item-container-form">
                <div class="main-pic__item-container">
                   <div class="main-pic__item__banner">
                       <div class="main-pic__item__banner-item">
                           Enjoy <span>Your</span> Holiday
                       </div>
                       <div class="main-pic__item__banner-item">
                           with Our <span>Agency</span>
                       </div>
                   </div>
    
                   <div class="main-pic__item__description">
                       <div class="main-pic__item__description-item">
                           <i class="main-pic__item__description-item__star fas fa-star"></i>
                           <span>spectacular things to do best </span>
                       </div>
                       <div class="main-pic__item__description-item">
                           <i class="main-pic__item__description-item__star fas fa-star"></i>
                           <span>local guide available</span>
                       </div>
                       <div class="main-pic__item__description-item">
                           <i class="main-pic__item__description-item__star fas fa-star"></i>
                           <span>all inclusive family holiday for all season</span>
                       </div>
                   </div>
    
                   <div class="btn main-pic__item__btn">
                       buy the tour
                       <span class="main-pic__item__btn__discount">$25</span>
                   </div>
                </div>
                <div class="main-pic__item__btn2 btn">
                buy the tour
            </div>  
    
           </div>`
            }
            document.documentElement.style.setProperty('--transition-slideBar',"all 8s linear")
        document.documentElement.style.setProperty('--width_slideBar',"100%")
        },300)
    },9000)

    btnNext.onclick = () =>{
    document.documentElement.style.setProperty('--width_slideBar',"0%")
    document.documentElement.style.setProperty('--transition-slideBar',"none")

        length++
        if(length >= mainPicArr.length){
            length=0
        }
        setTimeout(function(){
            mainPic.style.backgroundImage = `url(${mainPicArr[length]})`
            mainPic.innerHTML = ` 
    
            <div class="grid2 main-pic__item-container-form">
            <div class="main-pic__item-container">
               <div class="main-pic__item__banner">
                   <div class="main-pic__item__banner-item">
                       Enjoy <span>Your</span> Holiday
                   </div>
                   <div class="main-pic__item__banner-item">
                       with Our <span>Agency</span>
                   </div>
               </div>

               <div class="main-pic__item__description">
                   <div class="main-pic__item__description-item">
                       <i class="main-pic__item__description-item__star fas fa-star"></i>
                       <span>spectacular things to do best </span>
                   </div>
                   <div class="main-pic__item__description-item">
                       <i class="main-pic__item__description-item__star fas fa-star"></i>
                       <span>local guide available</span>
                   </div>
                   <div class="main-pic__item__description-item">
                       <i class="main-pic__item__description-item__star fas fa-star"></i>
                       <span>all inclusive family holiday for all season</span>
                   </div>
               </div>

               <div class="btn main-pic__item__btn">
                   buy the tour
                   <span class="main-pic__item__btn__discount">$25</span>
               </div>
            </div>
            <div class="main-pic__item__btn2 btn">
            buy the tour
        </div>  

       </div>`
        },300)
    clearInterval(autoplay)
    }

    btnPrev.onclick = () =>{
    document.documentElement.style.setProperty('--width_slideBar',"0%")
    document.documentElement.style.setProperty('--transition-slideBar',"none")
        length--
        if(length < 0){
            length = mainPicArr.length-1
        }
        setTimeout(function(){
            mainPic.style.backgroundImage = `url(${mainPicArr[length]})`
            mainPic.innerHTML = `  
    
            <div class="grid2 main-pic__item-container-form">
            <div class="main-pic__item-container">
               <div class="main-pic__item__banner">
                   <div class="main-pic__item__banner-item">
                       Enjoy <span>Your</span> Holiday
                   </div>
                   <div class="main-pic__item__banner-item">
                       with Our <span>Agency</span>
                   </div>
               </div>

               <div class="main-pic__item__description">
                   <div class="main-pic__item__description-item">
                       <i class="main-pic__item__description-item__star fas fa-star"></i>
                       <span>spectacular things to do best </span>
                   </div>
                   <div class="main-pic__item__description-item">
                       <i class="main-pic__item__description-item__star fas fa-star"></i>
                       <span>local guide available</span>
                   </div>
                   <div class="main-pic__item__description-item">
                       <i class="main-pic__item__description-item__star fas fa-star"></i>
                       <span>all inclusive family holiday for all season</span>
                   </div>
               </div>

               <div class="btn main-pic__item__btn">
                   buy the tour
                   <span class="main-pic__item__btn__discount">$25</span>
               </div>
            </div>
            <div class="main-pic__item__btn2 btn">
            buy the tour
        </div>  

       </div>`
        },300)
        clearInterval(autoplay)
    
    }
    // document.documentElement.style.setProperty('--width_slideBar',"0%")

}
let width = window.innerWidth;
console.log(width);
var heightMainPic = $('.main-pic__item')
heightMainPic.style.height=`${width}px`
var onresize = function() {
     width = window.innerWidth;
    // width%2==0?numMinus++:0
    // btnMainPic.style.padding

    heightMainPic.style.height= `${width}px`
    // console.log(btnMainPic)
}
window.onresize = onresize









