let seconds = 0;
let tens = 0;
let minuites = 0;
let getMinuites = document.getElementById('minuites')
let getSeconds = document.getElementById('seconds')
let getTens = document.getElementById('tens');
let buttonStart = document.getElementById('button-start')
let buttonStop = document.getElementById('button-stop')
let buttonReset = document.getElementById('button-reset')
let interval;
buttonStart.addEventListener('click', function () {
    interval = setInterval(startTimer, 10)
})


buttonStop.addEventListener('click', function () {
    clearInterval(interval)
})
buttonReset.addEventListener('click', function () {
    clearInterval(interval)
    minuites = '00'
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens
    getMinuites.innerHTML = minuites;
})

function startTimer() {
    tens++
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens
    }
    if (tens > 9) {
        getTens.innerHTML = tens
    }

    if (tens > 99) {
        seconds++
        getSeconds.innerHTML = '0' + seconds
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
        getSeconds.innerHTML = seconds
    }
    if (seconds > 59) {
        minuites++
        getMinuites.innerHTML = '0' + minuites;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if (minuites > 9) {
        getMinuites.innerHTML = minuites;
    }
}