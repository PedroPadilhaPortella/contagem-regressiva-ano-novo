const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')

const spinerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearDate = new Date(`January 01 ${nextYear} 00:00:00`)
nextYearContainer.textContent = nextYear

const getTimeUnity = unit => unit < 10 ? '0' + unit : unit

const insertCountDownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getTimeUnity(seconds)
    minutesContainer.textContent = getTimeUnity(minutes)
    hoursContainer.textContent = getTimeUnity(hours)
    daysContainer.textContent = getTimeUnity(days)
}

const updateCountDown = () => {
    const currentTime = new Date()
    const difference = newYearDate - currentTime

    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    insertCountDownValues({ days, hours, minutes, seconds })
}

const countDownDisplay = () => {
    spinerLoading.remove()
    countdownContainer.style.display = `flex`
}


setTimeout(countDownDisplay, 1000);
setInterval(updateCountDown, 1000)