const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const birthdayTime = new Date(`October 22 ${currentYear + 1} 00:00:00`);

// Update countdowntime

function updateCountdowntime() {
    const currentTime = new Date();
    const diff = birthdayTime - currentTime;

    const d = Math.floor(diff/(24*60*60*1000));
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    

    console.log(diff);
}

setInterval(updateCountdowntime, 1000);