setCountdown(10);

 function setCountdown(delay){
   //sets an timeout delay to display a message after the set delay
   setTimeout(function() {
    document.getElementById('countdown').innerHTML = "boom";
    document.getElementById('alarmimage').src = "alarm.jpg";
   }, delay*1000);

   //reduces the seconds left by 1
   var secondsleft = delay -1;
   //sets up an interval to fire every second
   var counter = setInterval(function() {

     //display the current seconds left
     document.getElementById('countdown').innerHTML = secondsleft--;

     //if we are at 0 stop the countdown
     if(secondsleft <=0){clearInterval(counter)}
   }, 1000);
 }
