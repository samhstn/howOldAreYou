function readBox(){
var age = document.getElementById('txtinput').value;
var Day = parseInt(age.substring(0,2));
var Month = parseInt(age.substring(3,5));
var Year = parseInt(age.substring(6,10));

var today = new Object();
today.day = 2;
today.month = 12;
today.year = 2015;

var born = new Object();
born.day = Day;
born.month = Month;
born.year = Year;

if(Day>31 || Month>12){
	document.getElementById("demo").innerHTML = "That is not a correct date!";
}
else{
if(today.day >= born.day && today.month >= born.month){
	var days = today.day - born.day;
	var months = today.month - born.month;
	var years = today.year - born.year;
}
else if (today.day >= born.day && today.month < born.month){
	var days = today.day - born.day;
	var months = 12 + today.month - born.month;
	var years = today.year - born.year - 1;
}
else if (today.day < born.day && today.month <= born.month){
	var days = 30 + today.day - born.day;
	var months = 12 + today.month - born.month -1;
	var years = today.year - born.year - 1;
}
else if(today.day < born.day && today.month > born.month){
	var days = 30 + today.day - born.day;
	var months = today.month - born.month -1;
	var years = today.year - born.year;
}
document.getElementById("demo").innerHTML = "You are: " + days + " days, " + months + " months, and " + years + " years old";
}
}