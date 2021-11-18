//Calendar part
n =  new Date(); //Creation of an Date object
y = n.getFullYear(); //We save the current year
y1 = y; //We save the current year for dateEndCalendar
m = n.getMonth() + 1; //We save the month and add 1, because it's used as 0-11 in Date
m1 = m; //We save the month for the dateEndCalendar, we suppose it's the same month
d = n.getDate(); //We save the current day
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
    d = "0" + d;
}

if(d1<10){ //If the day is inferior to 10, then we add a 0 to d1, so it doesn't create a problem in the date format
    d1 = "0" + d1;
}

if(m < 10) { //If the month is inferior to 10, we add a 0 to m, so it doesn't create a problem for the date format
    m = "0" + m;
}

if(m1 < 10) { //If the month is inferior to 10, we add a 0 to m, so it doesn't create a problem for the date format
    m1 = "0" + m1;
}

var todayDate = y + "-" + m + "-" + d; //We create the format of the string
var tomorrowDate = y1 + "-" + m1 + "-" + d1; //We create the format of the string

var dateStartCalendar = document.getElementById("DatesStartCalendar"); //We get the location of the id DatesStartCalendar
var dateEndCalendar =document.getElementById("DatesEndCalendar") //We get the location of the id DatesEndCalendar

dateStartCalendar.value=todayDate; //We change what is saved in value by the new day format
dateEndCalendar.value=tomorrowDate; //We change what is saved in value by the new day format

    //Var

var numberOfDays = 0;
var orundumOwned;
var annihilationLimit;
var annihilationFarmed;
var ticketsOwned;
var poOwned;
var numberOfRoll;

    //Action

var action = document.getElementById("Let's Go"); //The button to start the magic


//Listener
action.addEventListener("click", execute);

//Function

function nbOfDays(startDateArray, endDateArray) {

    //Var
    
    const endDay = new Date(endDateArray[1] + "/" + endDateArray[2] + "/" + endDateArray[0]); //We save the following day in the format mm/dd/yyyy format
    const currentDay = new Date(startDateArray[1] + "/" + startDateArray[2] + "/" + startDateArray[0]); //TWe save the date of start in the mm/dd/yyyy format

    //Operation
    numberOfDays = Math.ceil(Math.abs(endDay-currentDay)/(1000 * 60 * 60 * 24)); //We divide the difference of the 2 date, by the value in millisecond of 1 days. We get the absolute value, and we round up this value.
    

    const isChecked = document.getElementById("CheckEndDay"); //We save the checkbox CheckEndDay which serve to know if the user want to add the end date in the count of day

    if(isChecked.checked) { //Test if the checkbox is checked
        numberOfDays+= +isChecked.value; //If it is, we increase the number of day by 1
    }
    return [endDay, currentDay] //We return an array containting the 2 date
}

function nbOfMonth(startDateArray, endDateArray){
    const _StartDate = startDateArray; //We save the start in a local variable
    const _EndDate = endDateArray; //We save the end in a local variable
    var result; //It's here we will save the number of month between the 2 date
    if(_EndDate[0] == _StartDate[0]) { //If it's in the same year, then it's a simple substraction
        result = _EndDate[1] - _StartDate[1];
    } else { //It's a substraction, where we add a number of months
        result = _EndDate[1] - _StartDate[1] + 12;
    }

    return result; //We return the number of months between the 2 dates
}

function getValue() {
    //Get
    var orundum = document.getElementById("OrundumOwn").value;
    var orundumLimitAnni = document.getElementById("OrundumLimit").value;
    var orundumAnni = document.getElementById("OrundumAnni").value;
    var tickets = document.getElementById("TicketsRoll").value;
    var poOwn = document.getElementById("POwn").value;

    //Save the value inside global var
    orundumOwned = Number(orundum);
    annihilationLimit = Number(orundumLimitAnni);
    annihilationFarmed = Number(orundumAnni);
    ticketsOwned = Number(tickets);
    poOwned = Number(poOwn);
}

function showResult(numberOfRoll){
    //Var
    const _texte = "In " + numberOfDays + " days, you will be able to reach to reach an amount of " + numberOfRoll + " rolls.";

    //Action
    document.getElementById("Result").innerHTML=_texte;
    console.log(_texte)

}

function execute() {
    //Var for the function call
    var dateArray; //Var to save the array containing the array with the 2 date
    const endDateArray = document.getElementById("DatesEndCalendar").value.split("-"); //We get the value in DatesEndCalendar, and we create an array by removing the -
    const startDateArray = document.getElementById("DatesStartCalendar").value.split("-"); //We get the value in DatesStartCalendar, and we create an array by removing the -

    //Call to the other function to get some information
    getValue();
    dateArray=nbOfDays(startDateArray, endDateArray);

    //Var
    const _poToOrundum = document.getElementById("POCount"); //We save the checkbox in a variable
    const _notBoughtMonthly = document.getElementById("MonthlyTick"); //We save the checkbox in a variable
    const _numberOfWeeks = Math.floor(numberOfDays / 7); //Number of weeks left
    const _numberOfMonths = nbOfMonth(startDateArray, endDateArray);
    Math.floor(_numberOfMonths); //We round it down so we don't take the current month in account
    numberOfRoll = 0;

    console.log("Number of months: "+_numberOfMonths)
    
    console.log("Nombre de roll: " + numberOfRoll)

    //If section
    if(_poToOrundum.checked) { //Test if the checkbox is checked
        numberOfRoll += (poOwned * 180) / 600; //If it is checked, we add the divsion by 600 the number of PO multiplied by 180
    }

    console.log("Nombre de roll après PO: " + numberOfRoll)

    if(_notBoughtMonthly.checked) { //Test if the checkbox is checked
        numberOfRoll += 5; //4 tickets and 600 orundum
    }

    console.log("Nombre de roll après ticket monthly: " + numberOfRoll)

    numberOfRoll += +orundumOwned / 600 + +ticketsOwned; //We add the orundum already owned divided by 600 and the tickets owned

    console.log("Nombre de roll après Orundum et Ticket possédé: " + numberOfRoll)

    numberOfRoll += (+numberOfDays * 100) / 600 ; //We add the orundum from the daily mission

    console.log("Nombre de roll après dailymission: " + numberOfRoll)

    numberOfRoll += (_numberOfWeeks * 500 ) / 600; //We add the orundum from the weekly mission

    console.log("Nombre de roll après weekly mission: " + numberOfRoll)

    numberOfRoll += (_numberOfWeeks * +annihilationLimit) / 600; //We add the orundum from the weekly annihilation

    console.log("Nombre de roll après annihilation: " + numberOfRoll)

    numberOfRoll += (+annihilationLimit - +annihilationFarmed ) / 600; //We add the orundum from the current week

    console.log("Nombre de roll après actuel annihilation: " + numberOfRoll)

    numberOfRoll += _numberOfMonths * 6; //We add the tickets and orundum from the shop and the login bonus

    numberOfRoll = Math.floor(numberOfRoll);

    showResult(numberOfRoll); //Call to the function to show the result.

}
