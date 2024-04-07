const TimeQuery=document.querySelector(".timer");
const TypeArea=document.querySelector("#test-area");

var time = [0,0,0,0];
var runTime=false

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




function start(){
    if(!runTime){
        runTime=true
        setInterval(Timer, 10)
    }
}


TypeArea.addEventListener('keypress', start)