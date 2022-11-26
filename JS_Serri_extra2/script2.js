//meaning of =, == and ===; 

var a = 12;
var b = "12";

if(a == b){
    console.log ("Hi");
} 
// "Hi" will be printed because == compares the VALUE, NOT the type and in this case
// the value of the number is 12 and so is the value of the string 

// to compare the VALUE AND the TYPE, === should be used

if(a === b){
    console.log ("Hi");
}
 

//use functions to calculate values, e.g. average of marks
var yousuf = [40, 80, 66];
/* let sum = yousuf[0] + yousuf[1] + yousuf[2];
let avg = sum/yousuf.length; */

/* console.log(avg); */

var john = [80, 99, 79];
/* let sum2 = john[0] + john[1] + john[2];
let avg2 = sum/john.length; */

function calculateAvg(student){
    let sum = student[0] + student[1] + student[2];
    let avg = sum/student.length;
    
    console.log(avg);
}

calculateAvg(john);
calculateAvg(yousuf);
calculateAvg([99, 50, 88]); 

function crystalGazer(nok, partnerName, location, jobTitle){ //pass all the information as an argument
    console.log(`you live in ${location} and you have a total of ${nok} kids, with ${partnerName} and work as a ${jobTitle}`)
}
crystalGazer(2, "Stef", "Vienna", "scientist")


//if you write the information as a variable, the function will be no longer dynamic
function crystalGazer(nok, partnerName, jobTitle){ 
    var location = "Vienna";
    console.log(`you live in ${location} and you have a total of ${nok} kids, with ${partnerName} and work as a ${jobTitle}`)
}
crystalGazer(2, "Stef", "scientist") 

//if you use console.log you print in the consol
//if you use return you print in the browser


//two different ways to write functions

//a
function crystalGazer(nok, partnerName, location, jobTitle){ //pass all the information as an argument
    return(`you live in ${location} and you have a total of ${nok} kids, with ${partnerName} and work as a ${jobTitle}`)
}
crystalGazer(2, "Stef", "Vienna", "scientist")


//b
let crystalGazer2 = (nok,partnerName, location, jobTitle) => {
    return(`you live in ${location} and you have a total of ${nok} kids, with ${partnerName} and work as a ${jobTitle}`)
}

document.write(crystalGazer(2, "Stef", "Vienna", "scientist"));
console.log(crystalGazer(2, "Stef", "Vienna", "scientist")); 

var a = 30;   

if (a == 30){
    a = 60;
}

console.log(a);  //result: 60

var a = 30;   

if (a == 30){
    var a = 60;
}
console.log(a);  //result:60

var a = 30;   

if (a == 30){
    let a = 60;
}

console.log(a);  //result:30  let creates a block and the value exists only within the function

let a = 30;   

if (a == 30){
    let a = 60;
}

console.log(a);  //result:30

let a = 30;   

if (a == 30){
    const a = 60; //works like let
}

console.log(a); //result:30 */


let background = "";
let grade = 88;

if(grade >=80){
    background = "green";
}else if(grade>=60){

background = "yellow"; 
}else {
    background = "red";
}
