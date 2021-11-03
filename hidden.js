
n =  new Date(); //Creation of an Date object
y = n.getFullYear(); //We save the current year
m = n.getMonth() + 1; //We save the month and add 1, because it's used as 0-11 in Date
d = n.getDate(); //We save the current day
d1 = n.getDate()+1; //Tomorrow days

if(d<10){ //If the day is inferior to 10, then we add a 0 to di, so it doesn't create a problem in the date format
    d="0"+d;
}

if(d1<10){ //If the day is inferior to 10, then we add a 0 to di, so it doesn't create a problem in the date format
    d1="0"+d1;
}

var todayDate = y + "-" + m + "-" + d; //We create the format of the string
var tomorrowDate = y + "-" + m + "-" + d1; //We create the format of the string

var dateStartCalendar = document.getElementById("DatesStartCalendar"); //We get the location of the id DatesStartCalendar
var dateEndCalendar =document.getElementById("DatesEndCalendar") //We get the location of the id DatesEndCalendar

dateStartCalendar.value=todayDate; //We change what is saved in value by the new day format
dateEndCalendar.value=tomorrowDate; //We change what is saved in value by the new day format