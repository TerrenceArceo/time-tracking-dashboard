const dayBtn = document.getElementById('btn-daily')
const weekBtn = document.getElementById('btn-weekly')
const monthBtn = document.getElementById('btn-monthly')

const workHours = document.getElementById('work-hours')
const workPrev = document.getElementById('work-previous')
const playHours = document.getElementById('play-hours')
const playPrev = document.getElementById('play-previous')
const studyHours = document.getElementById('study-hours')
const studyPrev = document.getElementById('study-previous')
const exerciseHours = document.getElementById('exercise-hours')
const exercisePrev = document.getElementById('exercise-previous')
const socialHours = document.getElementById('social-hours')
const socialPrev = document.getElementById('social-previous')
const selfHours = document.getElementById('self-hours')
const selfPrev = document.getElementById('self-previous')

const workLast = document.getElementById('work-last')
const playLast = document.getElementById('play-last')
const studyLast = document.getElementById('study-last')
const exLast = document.getElementById('ex-last')
const socialLast = document.getElementById('social-last')
const selfLast = document.getElementById('self-last')

fetch('data.json')
        .then(res => res.json())
        .then(data => {
            workHours.textContent = `${data[0].timeframes.daily.current}hrs`
            workPrev.textContent = `${data[0].timeframes.daily.previous}hrs`
            playHours.textContent = `${data[1].timeframes.daily.current}hrs`
            playPrev.textContent = `${data[1].timeframes.daily.previous}hrs`
            studyHours.textContent = `${data[2].timeframes.daily.current}hrs`
            studyPrev.textContent = `${data[2].timeframes.daily.previous}hrs`
            exerciseHours.textContent = `${data[3].timeframes.daily.current}hrs`
            exercisePrev.textContent = `${data[3].timeframes.daily.previous}hrs`
            socialHours.textContent = `${data[4].timeframes.daily.current}hrs`
            socialPrev.textContent = `${data[4].timeframes.daily.previous}hrs`
            selfHours.textContent = `${data[5].timeframes.daily.current}hrs`
            selfPrev.textContent = `${data[5].timeframes.daily.previous}hrs`
        })




dayBtn.addEventListener('click', () => {
    workLast.textContent = 'yesterday'
    playLast.textContent = 'yesterday'
    studyLast.textContent = 'yesterday'
    exLast.textContent = 'yesterday'
    socialLast.textContent = 'yesterday'
    selfLast.textContent = 'yesterday'
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            workHours.textContent = `${data[0].timeframes.daily.current}hrs`
            workPrev.textContent = `${data[0].timeframes.daily.previous}hrs`
            playHours.textContent = `${data[1].timeframes.daily.current}hrs`
            playPrev.textContent = `${data[1].timeframes.daily.previous}hrs`
            studyHours.textContent = `${data[2].timeframes.daily.current}hrs`
            studyPrev.textContent = `${data[2].timeframes.daily.previous}hrs`
            exerciseHours.textContent = `${data[3].timeframes.daily.current}hrs`
            exercisePrev.textContent = `${data[3].timeframes.daily.previous}hrs`
            socialHours.textContent = `${data[4].timeframes.daily.current}hrs`
            socialPrev.textContent = `${data[4].timeframes.daily.previous}hrs`
            selfHours.textContent = `${data[5].timeframes.daily.current}hrs`
            selfPrev.textContent = `${data[5].timeframes.daily.previous}hrs`
        })
})

weekBtn.addEventListener('click', () => {
    workLast.textContent = 'last week'
    playLast.textContent = 'last week'
    studyLast.textContent = 'last week'
    exLast.textContent = 'last week'
    socialLast.textContent = 'last week'
    selfLast.textContent = 'last week'
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            workHours.textContent = `${data[0].timeframes.weekly.current}hrs`
            workPrev.textContent = `${data[0].timeframes.weekly.previous}hrs`
            playHours.textContent = `${data[1].timeframes.weekly.current}hrs`
            playPrev.textContent = `${data[1].timeframes.weekly.previous}hrs`
            studyHours.textContent = `${data[2].timeframes.weekly.current}hrs`
            studyPrev.textContent = `${data[2].timeframes.weekly.previous}hrs`
            exerciseHours.textContent = `${data[3].timeframes.weekly.current}hrs`
            exercisePrev.textContent = `${data[3].timeframes.weekly.previous}hrs`
            socialHours.textContent = `${data[4].timeframes.weekly.current}hrs`
            socialPrev.textContent = `${data[4].timeframes.weekly.previous}hrs`
            selfHours.textContent = `${data[5].timeframes.weekly.current}hrs`
            selfPrev.textContent = `${data[5].timeframes.weekly.previous}hrs`
        })
})

monthBtn.addEventListener('click', () => {
    workLast.textContent = 'last month'
    playLast.textContent = 'last month'
    studyLast.textContent = 'last month'
    exLast.textContent = 'last month'
    socialLast.textContent = 'last month'
    selfLast.textContent = 'last month'
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            workHours.textContent = `${data[0].timeframes.monthly.current}hrs`
            workPrev.textContent = `${data[0].timeframes.monthly.previous}hrs`
            playHours.textContent = `${data[1].timeframes.monthly.current}hrs`
            playPrev.textContent = `${data[1].timeframes.monthly.previous}hrs`
            studyHours.textContent = `${data[2].timeframes.monthly.current}hrs`
            studyPrev.textContent = `${data[2].timeframes.monthly.previous}hrs`
            exerciseHours.textContent = `${data[3].timeframes.monthly.current}hrs`
            exercisePrev.textContent = `${data[3].timeframes.monthly.previous}hrs`
            socialHours.textContent = `${data[4].timeframes.monthly.current}hrs`
            socialPrev.textContent = `${data[4].timeframes.monthly.previous}hrs`
            selfHours.textContent = `${data[5].timeframes.monthly.current}hrs`
            selfPrev.textContent = `${data[5].timeframes.monthly.previous}hrs`
        })
})