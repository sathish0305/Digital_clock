let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let amORpm = document.getElementById('ME')

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
    hour.innerHTML = (current_hour<10)? '0'+current_hour:current_hour
    minute.innerHTML = (current_minute<10)? '0'+current_minute : current_minute
    second.innerHTML = (current_second<10)? '0'+current_second:current_second
    twelveHourFormat(current_hour)
},1)