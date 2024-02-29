const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

function addCountDOM(d, h, m, s){
  days.innerHTML = String(d).padStart("2", 0)
  hours.innerHTML = String(h).padStart("2", 0)
  minutes.innerHTML = String(m).padStart("2", 0)
  seconds.innerHTML = String(s).padStart("2", 0)
}

function countRegressivo(){
  
  const currentDate = new Date()
  
  let futureDate = new Date("Jan 01, 2025 00:00:00");

  let leftDate =  futureDate - currentDate

  /* VARIAVEIS EM MILISSIGUNDOS */
  const ONE_SECONDS = 1000  
  const ONE_MINUTE = 60 * 1000
  const ONE_HOUR = 60 * 60 * 1000
  const ONE_DAY = 24 * 60 * 60 * 1000

  let d = Math.floor(leftDate / (ONE_DAY))

  let h = Math.floor((leftDate % (ONE_DAY)) / (ONE_HOUR))

  let m = Math.floor((leftDate % (ONE_HOUR)) / (ONE_MINUTE))

  let s = Math.floor((leftDate % (ONE_MINUTE)) / (ONE_SECONDS))

  if(leftDate >= 0) clearInterval(countRegressivo)

  addCountDOM(d, h, m, s)
}

setInterval(countRegressivo, 1000)