var fname = prompt ("Please type your name!");

if(fname =="Serri"){
    console.log("Hello Admin");

}else {
    console.log("Hello User");
}

// *load the page in the browser and you'll see an input. Type the name, then open the console to check what message was printed //


 var fnumber = prompt ("Please enter a number!");

if(fnumber == 50){
    console.log("Correct answer!");

}else if (fnumber > 50){
    console.log("Guess a lower number");
}else {
    console.log("Guess a higher number");
} 
// *load the page in the browser and you'll see an input. Type the number, then open the console to check what message was printed //

// the same functions but using SWITCH and DEFAULT
var number = prompt ("Please enter a number!");
(number == 50)
switch (true){
    case(number == 50): 
        console.log("Correct answer!");
        break;

    case(number > 50):
        console.log("Guess a lower number");
        break;
        default:
            console.log("Guess a higher number")
    }

var fname = prompt ("Please type your name!");
(fname == "Serri")
switch (false){
    case(fname === "Serri"):
    console.log("Hello Admin");
    break;

    case(fname !== "Serri"):
    console.log("Hello User");
    break;
    default:
        console.log("Hello User")
}

//comment all the functions but one before opening the file in the browser