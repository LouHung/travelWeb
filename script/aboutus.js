// const imgBackground = $(".body-staff-background")

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset

    // imgBackground.style.backgroundPositionY = `calc(-20em + ${offset*0.1}px)`;
    document.documentElement.style.setProperty('--position-pic-flow',`calc(-37em + ${offset*0.2}px)`)
})