const valueSlideBar = $('.body-package-input__range-price-value')
const rangeSlider =  $('.body-package-input__slice-price')
const filterBtn = $('.body-package-input__filter__btn')

const calendar = $('.calendar__container')
const inputCalendar = $('.body-package-input__select-day')
const iconCalendar = $('.body-package-input__select-icon-calendar')

// const price=Array.from($$('.app__sale__item-point-price--new'));
// price.map((value)=>{
//     var num = parseInt(value.innerText.split(' ')[0])
//     console.log(num);
// })
// console.log(price)
function changeRangeInput() {
    rangeSlider.oninput = function() {
        valueSlideBar.innerHTML = rangeSlider.value
    // change value slide bar
        let value = (this.value-this.min)/(this.max-this.min)*100
        this.style.background = 'linear-gradient(to right, #f76570 0%, #f76570 ' + value + '%, #e4e4e4 ' + value + '%, #e4e4e4 100%)'
    }
}


let months = [
    'January',
    'February',
    'March',
    'April',
     'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const date = new Date()
let currentMonth
let currentYear

function renderCalendar() {
let days = ""
let monthDays = $(".days")

    const lastDate = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate()//determine last day of current month
    const prevLastDate = new Date(date.getFullYear(),date.getMonth(),0).getDate()//determine last day of last month
    const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay()//determine which date is last day current month
    const nextDays = 7 - lastDayIndex - 1  
    //render banner 
     currentMonth=months[date.getMonth()]
     currentYear= date.getFullYear()
    $('.date .date__month').innerHTML = currentMonth
    $('.date .date__year').innerHTML =currentYear
    // render calendar
    date.setDate(1)
    const firstDayIndex = date.getDay()
   
    for(let x = firstDayIndex; x>0;x--) {
        days += `<div class="prev-date">${prevLastDate - x + 1}</div>`
    }
   
   
    //highlight date,render current month
    for(let i = 1; i <= lastDate; i++) {
        if( i=== new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class = "today">${i}</div>`
   
        }else{
            days += `<div>${i}</div>`
        }
    }
   
   for(let j = 1; j <= nextDays; j++) {
       days += `<div class="next-date">${j}</div>`
       monthDays.innerHTML = days
   
   }
   chooseDate(date.getMonth())
}


function switchCalendarBtn() {

$('.prev').addEventListener('click',() => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})
$('.next').addEventListener('click',() => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
})
}

function popupCalendar() {
    inputCalendar.onfocus = (e) => {
        e.preventDefault();
        calendar.style.display = 'block'
    }
    inputCalendar.onclick = (e) => {
        e.preventDefault();
        calendar.style.display = 'block'
    }
    iconCalendar.onclick = () => {
        calendar.style.display = 'block'
    }
    inputCalendar.onblur = () => {
        calendar.style.display = 'none'
    }
    calendar.onmousedown = (e) => {
        e.preventDefault()
    
    }
}



function chooseDate(month) {
   
    let days = Array.from($$('.days div')) //get all days to array
days.forEach((day)=>{
    day.onclick = ()=>{
        // renderCalendar()
        if(day.classList.contains("prev-date")){
            currentMonth=months[month - 1]
            
            if(month==0){ 
                currentMonth=months[11] 
                currentYear-=1}
                
            }else if(day.classList.contains("next-date")){
                currentMonth=months[month + 1]
                
                if(month==11){ 
                    currentMonth=months[0]
                    currentYear+=1}
                    
                }
                
                inputCalendar.value =`${currentMonth} - ${day.innerHTML} - ${currentYear}` 

                // choose day change background
                days.forEach((day)=>{
                    if(day.classList.contains("day-was-chosen")){
                        day.classList.remove('day-was-chosen');
                    }
                })
                    day.classList.add('day-was-chosen');
            
            calendar.style.display = 'none'
                    
            }
})
}

// filter btn
function popupFilter(){
    filterBtn.onclick = ()=>{
        $('.filter-list-container').classList.toggle('active')
    }
    $('.body-package-input__filter').onmouseover = ()=>{
        $('.filter-list-container').classList.add('active')
    }
    $('.body-package-input__filter').onmouseout = ()=>{
        $('.filter-list-container').classList.remove('active')
    }
}

function run() {
    popupFilter()
    popupCalendar()
switchCalendarBtn()
renderCalendar()
changeRangeInput()

}
run()
