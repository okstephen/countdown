const daysEle = document.getElementById("days")
const minEle = document.getElementById("minutes")
const hourEle = document.getElementById("hours")
const secondsEle = document.getElementById("seconds")


// console.dir(secondsEle)

function start() {


    const Birthday = "25 Aug 2024"
    const newDate = new Date(Birthday)
    const presentDate = new Date()


    const totalSeconds = (newDate - presentDate) / 1000

    const seconds = Math.floor(totalSeconds % 60)
    const minutes = Math.floor((totalSeconds / 60) % 60)
    const hours = Math.floor((totalSeconds / 3600) % 24)
    const days = Math.floor((totalSeconds / 3600) / 24)


    daysEle.innerHTML = days
    minEle.innerHTML = minutes
    hourEle.innerHTML = hours
    secondsEle.innerHTML = seconds
}

start()


setInterval(start, 1000)











// secondsEle.style.fontSize = "1000px"