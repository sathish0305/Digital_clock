let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let day = document.getElementById('day')
let twelvehour = document.getElementById('twelvehour')

twelvehour.innerHTML = ''
const dayDict = {
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Thursday',
    5:'Friday',
    6:'Saturday',
    7:'Sunday'
}

setInterval(()=>{
    let date = new Date()
    hour.innerHTML = date.getHours()
    minute.innerHTML = (date.getMinutes()<10)? '0'+date.getMinutes() : date.getMinutes()
    second.innerHTML = (date.getSeconds()<10)? '0'+date.getSeconds() : date.getSeconds()
    day.innerHTML = dayDict[date.getDay()]
},1)