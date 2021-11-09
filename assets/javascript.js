function showTime(){
  var date= new Date();
  var hrs= date.getHours();
  var min= date.getMinutes();
  var sec= date.getSeconds();
var session= "AM";

  if(hrs==0){
    hrs=12;
  }

  if(hrs>12){
    hrs= hrs-12;
    session= "PM";
  }

  hrs= (hrs<10) ? "0"+hrs : hrs;
  min= (min<10) ? "0"+min : min;
  sec= (sec<10) ? "0"+sec : sec;

  var time= hrs + ":" + min + ":" +sec+ " "+ session;
  document.getElementById("myClock").innerText= time;

setTimeout(showTime, 1000);
}
showTime();
