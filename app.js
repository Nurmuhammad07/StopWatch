let minText = document.querySelector('.min'),
    secText = document.querySelector('.sec'),
    mlText = document.querySelector('.ml'),
    btnStart = document.querySelector('.btnStart'),
    btnReset = document.querySelector('.btnReset'),
    btnInterval = document.querySelector('.btnInterval'),
    clearAllBtn = document.querySelector('.clear')

let min = 0,
    sec = 0,
    ml = 0,
    min1 = 0,
    sec1 = 0,
    ml1 = 0,
    count = 0,
    interval,
    interval1

function update() {
    ml++
    if (ml == 100) {
        sec++
        ml = 0
    }
    mlText.innerText = `0${ml}`
    if (ml >= 10) {
        mlText.innerText = `${ml}`
    }
    secText.innerText = `0${sec}`
    if (sec >= 10) {
        secText.innerText = `${sec}`
    }
    if (sec == 60) {
        sec = 0
        min++
        minText.innerText = `0${min}`
        if (min >= 10) {
            minText.innerText = `${min}`
        }
    }
}

function render() {
    ml1++
    if (ml1 == 100) {
        sec1++
        ml1 = 0
    }
    if (sec1 == 60) {
        sec1 = 0
        min1++
    }
}


btnStart.addEventListener('click', () => {
    if (btnStart.innerText == 'Start') {
        interval = setInterval(update, 10)
        interval1 = setInterval(render, 10)
        btnStart.innerText = 'Stop'
        btnInterval.addEventListener('click', addingInterval)
    } else {
        btnStart.innerText = 'Start'
        clearInterval(interval)
        btnInterval.removeEventListener('click', addingInterval)
        clearInterval(interval1)
    }
})

btnReset.addEventListener('click', () => {
    min = 0
    sec = 0
    ml = 0
    min1 = 0
    sec1 = 0
    ml1 = 0

    minText.innerText = `0${min}`
    secText.innerText = `0${sec}`
    mlText.innerText = `0${ml}`

    clearInterval(interval)
    clearInterval(interval1)

    let main = document.querySelector('.main')
    let tables = document.querySelectorAll('.table')
    
    tables.forEach(table => main.removeChild(table))
    btnStart.innerText = 'Start'
    clearAllBtn.style.display = 'none'
    count = 0
})

clearAllBtn.style.display = 'none'

clearAllBtn.addEventListener('click', () => {
    let main = document.querySelector('.main')
    let tables = document.querySelectorAll('.table')
    
    tables.forEach(table => main.removeChild(table))

    count = 0

    clearInterval(interval)
    clearInterval(interval1)

    min = 0
    sec = 0
    ml = 0
    min1 = 0
    sec1 = 0
    ml1 = 0

    minText.innerText = `0${min}`
    secText.innerText = `0${sec}`
    mlText.innerText = `0${ml}`

    clearAllBtn.style.display = 'none'
    btnStart.innerText = 'Start'
})

btnInterval.addEventListener('click', addingInterval)

function addingInterval() {
    if (ml != 0) {
        let main = document.querySelector('.main')
        // <div class="table">
        //     <div class="counter">02</div>
        //     <div class="timer">00:20:74</div>
        //     <div class="totalTime">00:20:74</div>
        // </div>
        let table = document.createElement('div'),
        counter = document.createElement('div'),
        timer = document.createElement('div'),
        totalTime = document.createElement('div')
        
        table.classList.add('table')
        counter.classList.add('counter')
        timer.classList.add('timer')
        totalTime.classList.add('totalTime')
        
        count++
        counter.innerText = `0${count}`
        if (count >= 10) {
            counter.innerText = `${count}`
        }
        
        
        timer.innerText = `${min1.valueOf() >= 10 ? '' : '0'}${min1}:${sec1.valueOf() >= 10 ? '' : '0'}${sec1}.${ml1.valueOf() >= 10 ? '' : '0'}${ml1}`
        min1 = 0
        sec1 = 0
        ml1 = 0
        // let timers = document.querySelectorAll('.timer')
        // timers.forEach(timer => {
        //     let counters = document.querySelectorAll('.counter')
        //     counters.forEach(counters => {
        //         if(timer == timer){
        //             // counters.classList.add('less')
        //         }
        //     })
        // })

        totalTime.innerText = `${min.valueOf() >= 10 ? '' : '0'}${min}:${sec.valueOf() >= 10 ? '' : '0'}${sec}.${ml.valueOf() >= 10 ? '' : '0'}${ml}`

        main.prepend(table)
        table.prepend(counter)
        table.appendChild(timer)
        table.appendChild(totalTime)
        clearAllBtn.style.display = 'block'
    }
}
