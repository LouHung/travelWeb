const imgBackground = $(".body-staff-background")

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset
    console.log(offset)
    imgBackground.style.backgroundPositionY = `calc(-20em + ${offset*0.1}px)`
})