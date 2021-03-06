// JavaScript source code for new year Clock Web Page
/* 1. showDate() - returns the currunt date in the format mm/dd/yyyy
 * 2. showTime() -  returns the currunt time in the format hh:mm:ss
 * 3. calcDays() - returns the currunt date and january 1st of the next year 
 */
//showDate() - return the currunt date in the format mm/dd/yyy 
function showDate(dateObj) {
    //extract date parts 
    var theDate = dateObj.getDate();
    var theMonth = dateObj.getMonth() + 1 ; //because it starts from 0 to  11     +1
    var theYear = dateObj.getFullYear();

    return theMonth + "/" + theDate + "/" + theYear;

}//end showDatw() function
//showTime() -  returns the currunt time in the format hh;mm;ss
function showTime(dateObj) {

    var thisSecond = dateObj.getSeconds();
    var thisMinute = dateObj.getMinutes();
    var thisHour = dateObj.getHours();
    //change thisHour from 24-hour time format to 12-hour time by 
    // 1) if thisHour is less than 12, then set ampm to "am" , otherwise set it to "pm"
    var ampm = (thisHour < 12) ? " am" : " pm";

    // 2) substract 12 from thisHour
    thisHour = (thisHour > 12) ? (thisHour - 12) : thisHour;

    // 3) if thisHOur equals zero, change it to 12
    thisHour = (thisHour == 0) ? 12 : thisHour;
    // add leading zeros to the minutes and second less than 10 
    thisMinute = (thisMinute < 10) ? ("0" + thisMinute) : thisMinute;
    thisSecond = (thisSecond < 10) ? ("0" + thisSecond) : thisSecond;

    return thisHour + ":" + thisMinute + ":" + thisSecond + ampm;
}
function calcDays(currentDate) {
    // create a date object for january 1st of the next year
    var nextYear = currentDate.getFullYear() + 1;
    
    //insert a temporary date for January 1st
    var newYear = new Date("January 1,2017");
    // set the newYear to the nextYear
    newYear.setFullYear(nextYear);
    /*calculate the difference between the current date and January 1st of the next year*/
    //convert the milliseconds to days
    var m2D = (1000 * 60 * 60 * 24);

    var theDays = (newYear - currentDate) / m2D;
    return theDays;

}
