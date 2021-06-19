var eidDate = new Date('22 july 2021').getTime();

setInterval(()=>{
var currDate = new Date().getTime();
var difference = eidDate - currDate ;

var sec = Math.floor((difference % (1000 * 60)) / 1000);
var min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)) ;
var hour = Math.floor((difference % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
var day = Math.floor( difference  / (1000 * 60 * 60 * 24) ) ;
// console.log(`${day}  ${hour}  ${min} ${sec}`)

// document.write(` ${day} days : ${hour} hours: ${min} mins: ${sec} secs:`)

document.getElementById("time").innerHTML = day + "   Days" + " || " + hour +  "  Hours"
+ "    ||    " + min +  " Minuts "+"  ||  "  +  sec +   "  Seconds  </br> Remaining in Eid ul Azha" ;


// document.getElementById('day').innerHTML = day;
// document.getElementById('hour').innerHTML = hour;
// document.getElementById('min').innerHTML = min;
// document.getElementById('sec').innerHTML = sec;
},1000)

