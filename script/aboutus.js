// const imgBackground = $(".body-staff-background")

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset

    // imgBackground.style.backgroundPositionY = `calc(-20em + ${offset*0.1}px)`;
    document.documentElement.style.setProperty('--position-pic-flow',`calc(-40em + ${offset*0.2}px)`)
    document.documentElement.style.setProperty('--position-pic-flow2',`calc(30em + ${offset*0.2}px)`)
})