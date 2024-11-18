setCountdown(10, Bam);
setCountdown(15, Boom);
setCountdown(17, BigBadaBoom);

 function setCountdown(delay, callback){
   //sets an timeout delay to display a message after the set delay
   setTimeout(function() {
    console.log("boom")
    callback();
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

 function Boom(){
  document.getElementById('alarm').innerHTML = "<img id='alarmimage' src='alarm.jpg' />"
 }

 function Bam(){
  document.getElementById('alarm').innerHTML = "<img id='alarmimage' src='bam.jpg' />"
 }
 
 function BigBadaBoom(){
  document.getElementById('alarm').innerHTML = "<img id='alarmimage' src='BigBadaBoom.jpg' />"
 }