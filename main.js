var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById("clock")
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    var meridian = "AM"

    if(hours >= noon){
        meridian = "PM";
    }else{
        meridian = "AM";
    }


    var clockTime = hours + ': ' +minutes + ': ' + seconds + " " + meridian;
   

if (minutes > 10){
    var clockTime = hours + ': ' +minutes + ': ' + seconds + " " + meridian;
}else{
    var clockTime = hours + ': ' + "0" +minutes + ': ' + seconds + " " + meridian;
}

clock.innerText = clockTime;
    changeImage();
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);


}
var  oneSecond = 1000

setInterval(showCurrentTime , oneSecond);

function changeImage(){
    var time = new Date().getHours();

    var image = "img/dslogo.png";
    var imageHTML = document.getElementById("timeimage")

if(time == wakeuptime){
    image = "img/morning.gif"
    }else if(time == dstime){
        image = "img/class.gif"
    }else if(time == sleeptime){
        image = "img/night.gif"
    }
    imageHTML.src = image;
}