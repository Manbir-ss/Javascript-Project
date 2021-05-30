const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')







const newYears = "1 Jan 2022" 

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalseconds =  (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalseconds/3600 /24 );
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes =Math.floor(totalseconds/60)%60;
    const seconds =Math.floor(totalseconds)%60;

    console.log(days , hours , minutes)

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minutes;
    secondsEl.innerHTML=seconds;

}




countdown();

setInterval(countdown,1000)