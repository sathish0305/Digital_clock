let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')

let thour = document.getElementById('thour')
let tminute = document.getElementById('tminute')
let tsecond = document.getElementById('tsecond')

let amORpm = document.getElementById('ME')
let tamORpm = document.getElementById('tME')

tamORpm.style.display = 'none'

let currentday = document.getElementById('day')
let twelve = document.getElementById('twelve')
let twentyfour = document.getElementById('twentyfour')


let days = {
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Thursday',
    5:'Friday',
    6:'Saturday',
    7:'Sunday'
}

let twelveHourFormat = (hours)=>{
    let format = 12
    if(hours>12){
        hour.innerHTML = hours-format
        amORpm.innerHTML = ' PM'
    }else{
        hour.innerHTML = hours
        amORpm.innerHTML = ' AM'
    }

}

setInterval(()=>{
    let date = new Date();
    let day = date.getDay()
    let current_hour = date.getHours()
    let current_minute = date.getMinutes()
    let current_second = date.getSeconds()
    currentday.innerHTML = days[day]
    hour.innerHTML = (current_hour<10)? '0'+current_hour:current_hour
    minute.innerHTML = (current_minute<10)? '0'+current_minute : current_minute
    second.innerHTML = (current_second<10)? '0'+current_second:current_second

    thour.innerHTML = (current_hour<10)? '0'+current_hour:current_hour
    tminute.innerHTML = (current_minute<10)? '0'+current_minute : current_minute
    tsecond.innerHTML = (current_second<10)? '0'+current_second:current_second
    twelveHourFormat(current_hour)
},1)