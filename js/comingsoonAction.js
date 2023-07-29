const targetDate = new Date('2024-01-01 21:00').getTime(); //target time

function count() { //update the timer
    let now = new Date().getTime();
    let gap = targetDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / second);

    if(s >= 0) { //counter
        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minute').innerText = m;
        document.getElementById('second').innerText = s;
    } else { //no counter, because time is up (seconds < 0)
        document.getElementById('day').innerText = 0;
        document.getElementById('hour').innerText = 0;
        document.getElementById('minute').innerText = 0;
        document.getElementById('second').innerText = 0;
    }
}

setInterval(function() {
    count();
}, 1000); //repeat this method every second