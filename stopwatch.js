const TimerElRef = document.getElementById('timer')
const startButtonElRef = document.getElementById('startbutton')
const stopButtonElRef = document.getElementById('stopbutton')
const resetButtonElRef = document.getElementById('resetbutton')
let Interval;
let hour = 0;
let min = 0;
let second = 0;
const startTimer = () => {
    if (!
    Interval) {
        
    Interval = setInterval(() => {
            second++;
            if (second === 60) {
                second = 0;
                min++;
                if (min === 60) {
                    min = 0;
                    hour++;
                }
            }
            TimerElRef.innerHTML = formatTime(hour, min, second);
        }, 1000);
    }
};
const stopTimer = () => {
    clearInterval(
    Interval);
    
Interval = null;
};
const resetTimer = () => {
    clearInterval(
    Interval);
    
Interval = null;
    hour = 0;
    min = 0;
    second = 0;
    TimerElRef.innerHTML = "00:00:00";
};
const formatTime = (hour, min, second) => {
    const format = (num) => String(num).padStart(2, '0');
    return `${format(hour)}:${format(min)}:${format(second)}`;
};
startButtonElRef.addEventListener('click', startTimer)
stopButtonElRef.addEventListener('click', stopTimer)
resetButtonElRef.addEventListener('click', resetTimer)