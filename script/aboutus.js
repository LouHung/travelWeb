// const imgBackground = $(".body-staff-background")
function scrollSlowBackground(){
    window.addEventListener("scroll",function(){
        let offset = window.pageYOffset
    
        // imgBackground.style.backgroundPositionY = `calc(-20em + ${offset*0.1}px)`;
        document.documentElement.style.setProperty('--position-pic-flow',`calc(-40em + ${offset*0.2}px)`)
        document.documentElement.style.setProperty('--position-pic-flow2',`calc(55em + ${offset*0.2}px)`)
    })
}
scrollSlowBackground()