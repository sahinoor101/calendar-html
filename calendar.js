const day = document.querySelectorAll(".date");
console.log(day);
const MonthName = document.querySelector(".monthName");
let arrOfName = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULIY", "AGUST", "SEPTEMBER", "OCTOBER", "NOVERMEBR", "DECEMBER"];

// 1/1/1 was monday Acording to Gregorian Calendar
function isLeap(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

function getFirstday(year, month) {
    let firstday = 0;
    for (let i = 1; i <= year; i++) {
        if (isLeap(i)) {
            firstday += 2;
        }
        else {
            firstday++;
        }
    }
    firstday %= 7;
    return getFirstdayOfMonth(month, year, firstday);
}

function getValue() {
    const year = document.querySelector("#year");
    const month = document.querySelector("#month");
    let year1 = year.value;
    let month1 = month.value;
    MonthName.textContent = arrOfName[month.value - 1] + "   " + year1;
    let value = getFirstday(year1, month1);
    display(value, month1 ,year1);
}

function getFirstdayOfMonth(month, year, firstday) {
    // return firstday;
    let noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeap(year)) {
        noOfDays[1] = 29;
    }
    for (i = 1; i < month; i++) {
        firstday += noOfDays[i - 1];
    }
    return firstday % 7;
}
function display(value, month ,year) {
    let noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeap(year)) {
        noOfDays[1] = 29;
    }
    let date = 1;
    for (let i = 0; i < 42; i++) {
        if (i >= value && date <= noOfDays[month - 1]) {
            day[i].textContent = date;
            date++;
        }
        else {
            day[i].textContent = "";
        }
    }
}