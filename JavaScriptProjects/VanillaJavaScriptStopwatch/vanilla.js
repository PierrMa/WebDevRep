let digits=[0,0,0,0];//the first 2 case are for the seconds and the first 2 last are for the 1/100seconds

//function to control each digit
function addTenMs(){
    if(digits[3]<9){
        digits[3]++;
    }else {
        digits[3]=0;
        if(digits[2]<9){
            digits[2]++;
        }else {
            digits[2]=0;
            if(digits[1]<9){
                digits[1]++;
            }else {
                digits[1]=0;
                if(digits[0]<9){
                    digits[0]++;
                }else {
                    digits[0]=0;
                }
            }
        }
    }
   document.getElementById("digit4").innerHTML=digits[3];
   document.getElementById("digit3").innerHTML=digits[2];
   document.getElementById("digit2").innerHTML=digits[1];
   document.getElementById("digit1").innerHTML=digits[0];
}

let setIntervalID;
//control of the result of the click on the start button
document.getElementById("start").addEventListener('click',function(){
    setIntervalID=setInterval(addTenMs,10); //to make evolve the timer
    //to disable the start button
    document.getElementById("start").setAttribute('disabled','true')
})

//control of the result of the click on the stop button
document.getElementById("stop").addEventListener('click',function(){
    clearInterval(setIntervalID);
    document.getElementById("start").removeAttribute('disabled');
})

//control of the result of the click on the stop button
document.getElementById("reset").addEventListener('click',function(){
    digits[3]=0;
    digits[2]=0;
    digits[1]=0;
    digits[0]=0;
    document.getElementById("digit4").innerHTML=digits[3];
    document.getElementById("digit3").innerHTML=digits[2];
    document.getElementById("digit2").innerHTML=digits[1];
    document.getElementById("digit1").innerHTML=digits[0];
    clearInterval(setIntervalID);
    document.getElementById("start").removeAttribute('disabled');
})