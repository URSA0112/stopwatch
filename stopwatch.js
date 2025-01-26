const TimerElRef = document.getElementById('timer')
const startButtonElRef = document.getElementById('startbutton')
const stopButtonElRef = document.getElementById('stopbutton')
const resetButtonElRef = document.getElementById('resetbutton')

let hour  ;
let min ; 
let sec = 0; 
const startTimer = ()=>{
    setInterval (()=>{
        if (sec < 5)
      { 
    TimerElRef.innerHTML = sec++;}},1000)

};

const stopTimer = ()=>{};
const resetTimer = ()=>{};



startButtonElRef.addEventListener('click',startTimer )
stopButtonElRef.addEventListener('click',stopTimer )
resetButtonElRef.addEventListener('click', resetTimer )
