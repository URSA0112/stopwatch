const TimerElRef = document.getElementById('timer')
const startButtonElRef = document.getElementById('startbutton')
const stopButtonElRef = document.getElementById('stopbutton')
const resetButtonElRef = document.getElementById('resetbutton')

let hour  ;
let min ; 
let second; 
const startTimer = ()=>{};
const stopTimer = ()=>{};
const resetTimer = ()=>{};



startButtonElRef.addEventListener('click',startTimer )
stopButtonElRef.addEventListener('click',stopTimer )
resetButtonElRef.addEventListener('click', resetTimer )