let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')


setInterval(()=>{
    let date = new Date();
    let current_hour = date.getHours()
    let current_minute = date.getMinutes()
    let current_second = date.getSeconds()
    hour.innerHTML = (current_hour<10)? '0'+current_hour : current_hour
    minute.innerHTML = (current_minute<10)? '0'+current_minute : current_minute
    second.innerHTML = (current_second<10)? '0'+current_second : current_second 
},1)