let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let day = document.getElementById('day')
let twelvehour = document.getElementById('twelvehour')
let twelvehourToggle = document.getElementById('format-toggle-twelve')

const dayDict = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}
let twelveHourFormat = () => {
    setInterval(() => {
        let date = new Date()
        hour.innerHTML = date.getHours()
        minute.innerHTML = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
        second.innerHTML = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()
        day.innerHTML = dayDict[date.getDay()]
    }, 1)
}

let twentyfourHourFormat = () => {
    setInterval(() => {
        let date = new Date()
        hour.innerHTML = date.getHours()
        minute.innerHTML = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
        second.innerHTML = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()
        day.innerHTML = dayDict[date.getDay()]
    })
}

twelvehour.innerHTML = 'AM'
setInterval(() => {
    twelveHourFormat();
}, 1)
twelvehourToggle.addEventListener('click', () => {
    let disabled = twelvehourToggle.classList.toggle('format-toggle-twenty')
    console.log(disabled)
    if (disabled == true) {
        twelvehour.innerHTML = ''
        twentyfourHourFormat();
    } else if (disabled == false) {
        twelvehour.innerHTML = 'AM'
        twelveHourFormat();
    }
})