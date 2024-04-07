const TimeQuery=document.querySelector(".timer");
const TypeArea=document.querySelector("#test-area");
const origintext=document.querySelector('#origin-text p').innerHTML;
const testWrapper=document.querySelector('.test-wrapper');
const resetButton=document.querySelector('#reset');

var time = [0,0,0,0];
var runTime=false
var interval;

function addzero(time_){

    if(time_<=9){
        time_='0'+time_;
        
    }
    return time_;
}

function Timer()
{
    let currentTime = addzero(time[0])+':'+addzero(time[1])+':'+addzero(time[2]);
    TimeQuery.innerHTML = currentTime
    time[3]++;
    time[0]=Math.floor((time[3]/100)/60);
    time[1]=Math.floor(time[3]/100)-[time[0]*60];
    time[2]=Math.floor(time[3] - (time[1]*100) - (time[0]*6000));

}


function spellcheck(){
    let textEntered=TypeArea.value;
    let originTextMatch=origintext.substring(0,textEntered.length);

    if(textEntered==origintext){
        testWrapper.style.borderColor='green';
        clearInterval(interval);
    }else{
        if(textEntered==originTextMatch){
            testWrapper.style.borderColor='yellow';
        }else{
            testWrapper.style.borderColor='red';
        }
    }
}

function reset(){
    clearInterval(interval);
    interval=null;
    time=[0,0,0,0];
    runTime=false;
    TypeArea.value="";
    TimeQuery.innerHTML="00:00:00";
    testWrapper.style.borderColor="grey";

}


function start(){
    if(!runTime){
        runTime=true
        interval = setInterval(Timer, 10)
    }
}


TypeArea.addEventListener('keypress', start);
TypeArea.addEventListener('keyup', spellcheck);
resetButton.addEventListener('click', reset)