let start = document.getElementById('start');
let stop = document.getElementById('stop');
let restart = document.getElementById('restart');
let display = document.getElementById('display');

let sec = 0;
let min = 0;
let millisec = 0;
let time = null;

start.addEventListener('click', () => {
    if(!time)
    {
        time = setInterval(() => {
            millisec++;
            if (millisec >= 100) {
                sec++;
                millisec = 0;
            }
            if (sec >= 60) {
                min++;
                sec = 0;
            }
            display.innerText = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}:${String(millisec).padStart(2, '0')}`;
        });
    }
});

stop.addEventListener('click', () => {
    clearInterval(time);
    time = null;  
});

restart.addEventListener('click', () => {
    clearInterval(time);
    time = null;  
    sec = 0;
    min = 0;
    millisec = 0;
    display.innerText = '00:00:00';
});
