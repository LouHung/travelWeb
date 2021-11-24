
let length = 0
const btnPrev = $('.main-pic__switchPageIcon__prev')
const btnNext = $('.main-pic__switchPageIcon__next')
let mainPic = $('.main-pic__item')
let mainPicArr=['asset/img/slide-01.jpg','asset/img/slide-02.jpg']
mainPic.style.backgroundImage = `url(${mainPicArr[0]})`

let daysValue = $('.limitSale-timeLimit-num-days')
let hoursValue = $('.limitSale-timeLimit-num-hours')
let minutesValue = $('.limitSale-timeLimit-num-minutes')
let secondsValue = $('.limitSale-timeLimit-num-seconds')
//set time count down
time={
    days:2,
    hours:5,
    minutes:3,
    seconds:20
}

let contentMainPic= ` 
    
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
<a href="../travelWeb/packages.html">buy the tour</a>
</div>  

</div>`



run()
function run() {
    mainPicSwitcher()
    resizeMainPic()
    timeCounter(time)

}

function setLineStop(){
    document.documentElement.style.setProperty('--transition-slideBar',"none")
    document.documentElement.style.setProperty('--width_slideBar',"0%")
}
function setSlideStart(){
    document.documentElement.style.setProperty('--transition-slideBar',"all 8s linear")
        document.documentElement.style.setProperty('--width_slideBar',"100%")
}

function resetLine(){
    document.documentElement.style.setProperty('--transition-slideBar',"none")
    document.documentElement.style.setProperty('--width_slideBar',"0%")
    setTimeout(function(){
        document.documentElement.style.setProperty('--transition-slideBar',"all 8s linear")
        document.documentElement.style.setProperty('--width_slideBar',"100%")
    },500)//don't know why if I don't put setTimeout here it doesn't work accurately
}

function mainPicSwitcher() {
   
    resetLine()
   
    
    let autoplay=setInterval(()=>{
        setLineStop()

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
            mainPic.innerHTML = contentMainPic
            }
            setSlideStart()
        },300)
    },9000)
   
   
function btnSwitcher() {

}
    btnNext.onclick = () =>{
        setLineStop()

        length++
        if(length >= mainPicArr.length){
            length=0
        }
        setTimeout(function(){
            mainPic.style.backgroundImage = `url(${mainPicArr[length]})`
            mainPic.innerHTML = contentMainPic
        },300)
    clearInterval(autoplay)
    }

    btnPrev.onclick = () =>{
        setLineStop()
        length--
        if(length < 0){
            length = mainPicArr.length-1
        }
        setTimeout(function(){
            mainPic.style.backgroundImage = `url(${mainPicArr[length]})`
            mainPic.innerHTML = contentMainPic
        },300)
        clearInterval(autoplay)
    
    }
    // document.documentElement.style.setProperty('--width_slideBar',"0%")

}


//resize mainPic when resize the window
function resizeMainPic(){
    let width = window.innerWidth;
    let heightMainPic = $('.main-pic__item')
    heightMainPic.style.height=`${width}px`
    let onresize = function() {
         width = window.innerWidth;
    
        heightMainPic.style.height= `${width}px`
    }
    window.onresize = onresize
}



function timeCounter(time) {
    let seconds = time.seconds
    let minutes = time.minutes
    let hours = time.hours
    let days = time.days
    let counter=setInterval(()=>{
        
        seconds==0 && minutes==0 && hours==0 && days==0 ? clearInterval(counter) :   seconds--
        if(seconds==0&& minutes>0){
            seconds=59;
            minutes--
        }
        if(minutes==0&& hours>0){
            hours--;
            minutes=59
        }
        if(hours==0 && days>0){
            days--;
            hours=23
        }
        daysValue.innerHTML = `${days}`
        hoursValue.innerHTML =`${hours}`
        minutesValue.innerHTML = `${minutes}`
        secondsValue.innerHTML = `${seconds}`
        
    },1000)
}





