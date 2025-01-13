const day=document.querySelectorAll(".date");
console.log(day);
const MonthName = document.querySelector(".monthName");

let firstday=6;
let date=1;
let arrOfName =["JANUARY" , "FEBRUARY","MARCH","APRIL","MAY","JUNE","JULIY","AGUST","SEPTEMBER" ,"OCTOBER" ,"NOVERMEBR" ,"DECEMBER" ];


function getValue(){
    const year=document.querySelector("#year");
    const month=document.querySelector("#month");
    let year1=year.value;
    MonthName.textContent = arrOfName[month.value - 1] +"   "+ year1;
}

for(let i=0 ; i< 42;i++)
{
    if(i >=firstday && date<31)
    {
        day[i].textContent = date;
        date++;
    }
    else{
        day[i].textContent ="";
    }
}

