let hourID = document.getElementById("hour");
let minuteID = document.getElementById("minute");
let secondID = document.getElementById("second");
let momentOfTheDayID = document.getElementById("momentOfTheDay");
let hour=0;
let minute=0;
let second=0;
let momentOfTheDay="AM";

function updateHour(){
    const day = new Date();
    console.log(day);
    hour= day.getHours();
    minute= day.getMinutes();
    second= day.getSeconds();

    if(hour>12)
    {
        hour=hour-12;
        momentOfTheDay = "PM";
        hourID.innerHTML=hour;
    }else{
        if(hour<=9){
            hourID.innerHTML=`0${hour}`;
        }else{
            hourID.innerHTML=hour;
        }
        momentOfTheDay="AM";
    }

    if(minute<=9)
    {
        minuteID.innerHTML=`0${minute}`;
    }else{
        minuteID.innerHTML=minute;
    }

    if(second<=9)
    {
        secondID.innerHTML=`0${second}`;
    }else{
        secondID.innerHTML=second;
    }
    
    momentOfTheDayID.innerHTML=momentOfTheDay;
}

setInterval(updateHour,1000);