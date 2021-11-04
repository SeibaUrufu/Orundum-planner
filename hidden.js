//Calendar part
n =  new Date(); //Creation of an Date object
y = n.getFullYear(); //We save the current year
y1 = y; //We save the current year for dateEndCalendar
m = n.getMonth() + 1; //We save the month and add 1, because it's used as 0-11 in Date
m1 = m; //We save the month for the dateEndCalendar, we suppose it's the same month
d = n.getDay(); //We save the current day
d1 = d+1; //The next day

if(((1 == m)||(3 == m)||(5 == m)||(7 == m)||(8 == m)||(10 == m)||(12 == m)) && (32 == d1)) { //We test if the month is one with 31 days and if the day for tomorrow is 32
    d1 = 1; //We set the following day to 1
    if(12 == m) { //We do a test if the current month is December
        m1 = 1; //If it's the case we set the following month to January
        y1 += 1; //And we increase the year by 1
    } else { 
        m1 +=1; //Else we just increase the day by 1
    }
} else if(((4 == m)||(6 == m)||(9 == m)||(11 == m) ) && (31 == d1)) { //We test if the month is one with 30 days, and if the d1 is egal to 31
    d1 = 1; //We set the following day to 1
    m1 += 1; //We increase the month by 1
} else  { //February case. Fuck this month
    if(((0 == y%100) && (0 == y%4)) || (0 == y%400)){ //We do a test if it's a year with 366 days
        if(29 == d) { //We then check if the current day is the 29th, if it's a year with 366 days
            d1 = 1; //We set the day to 1 for the following day
            m1 = 3; //We set the month to March
        }
    } else { //Else it's a year with 365 days
        if( 28 == d) { //If it's the 28th days
            d1 = 1; //We set the following day to 1
            m1 = 3; //The month to March
        }
    }
}

if(d<10){ //If the day is inferior to 10, then we add a 0 to d, so it doesn't create a problem in the date format
    d="0"+d;
}

if(d1<10){ //If the day is inferior to 10, then we add a 0 to d1, so it doesn't create a problem in the date format
    d1="0"+d1;
}

if(m < 10) { //If the month is inferior to 10, we add a 0 to m, so it doesn't create a problem for the date format
    m = "0" + m;
}

if(m1 < 10) { //If the month is inferior to 10, we add a 0 to m, so it doesn't create a problem for the date format
    m1 = "0" + m1;
}

var todayDate = y + "-" + m + "-" + d; //We create the format of the string
var tomorrowDate = y1 + "-" + m1 + "-" + d1; //We create the format of the string
console.log(tomorrowDate)

var dateStartCalendar = document.getElementById("DatesStartCalendar"); //We get the location of the id DatesStartCalendar
var dateEndCalendar =document.getElementById("DatesEndCalendar") //We get the location of the id DatesEndCalendar

dateStartCalendar.value=todayDate; //We change what is saved in value by the new day format
dateEndCalendar.value=tomorrowDate; //We change what is saved in value by the new day format

    //Action
//Var

var action = document.getElementById("Let's Go"); //The button to start the magic

action.addEventListener("click", nbOfDays);

function nbOfDays(){

    //Var
    var endDateArray = document.getElementById("DatesEndCalendar").value.split("-"); //We get the value in DatesEndCalendar, and we create an array by removing the -
    var startDateArray = document.getElementById("DatesStartCalendar").value.split("-"); //We get the value in DatesStartCalendar, and we create an array by removing the -
    var endDay = new Date(endDateArray[1] + "/" + endDateArray[2] + "/" + endDateArray[0]); //We save the following day in the format mm/dd/yyyy format
    const currentDay = new Date(startDateArray[1] + "/" + startDateArray[2] + "/" + startDateArray[0]); //TWe save the date of start in the mm/dd/yyyy format

    //Operation
    const numberOfDays = Math.ceil(Math.abs(endDay-currentDay)/(1000 * 60 * 60 * 24));
    console.log(numberOfDays);
}


