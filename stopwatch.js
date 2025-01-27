const TimerElRef = document.getElementById('timer')
const startButtonElRef = document.getElementById('startbutton')
const stopButtonElRef = document.getElementById('stopbutton')
const resetButtonElRef = document.getElementById('resetbutton')

let hour = `00`;
let min = `00`; 
let sec = `0`; 
const startTi0mer = ()=>{
    setInterval (()=>{
      for (let i =0;i <10;i++){

        if (sec === 60)}
      { 
    TimerElRef.innerHTML = `${hour}.${min}.${sec++}`;}},1000)
      
};

const stopTimer = ()=>{};
const resetTimer = ()=>{};



startButtonElRef.addEventListener('click',startTimer )
stopButtonElRef.addEventListener('click',stopTimer )
resetButtonElRef.addEventListener('click', resetTimer )
