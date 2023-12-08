import './css/index.css'
import { parseStringToDate, formatNumberCounter } from './utils'

const days = document.getElementById('days')!
const hours = document.getElementById('hours')!
const minutes = document.getElementById('minutes')!
const seconds = document.getElementById('seconds')!

const currentYear = new Date().getFullYear()

const date = `25/12/${currentYear}`
const formattedDate = parseStringToDate(date)

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const countDown = () => {
  const currentDate = new Date()
  const gapDates = formattedDate.getTime() - currentDate.getTime()

  const textDays = Math.floor(gapDates / day)
  const textHours = Math.floor((gapDates % day) / hour)
  const textMinutes = Math.floor((gapDates % hour) / minute)
  const textSeconds = Math.floor((gapDates % minute) / second)

  days.textContent = formatNumberCounter(textDays)
  hours.textContent = formatNumberCounter(textHours)
  minutes.textContent = formatNumberCounter(textMinutes)
  seconds.textContent = formatNumberCounter(textSeconds)
}

countDown()

setInterval(() => {
  countDown()
}, 1000)
