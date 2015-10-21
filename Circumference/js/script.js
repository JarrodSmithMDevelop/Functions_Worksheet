/**
 * Jarrod Smith
 * 10/20/15
 * Functions Worksheet circumference
 * SDI 1510 Section 1
 */


//Variables

var radius;     //Store the radius of the circle

//Inputs

radius = Number(prompt("Enter your radius of the circle in iches."));        //Prompts user to input a radius
//Ensure you entered a number
if (radius === 0){
    //Prompts you to enter a radius if you haven't already
    radius = Number(prompt("Please enter the radius of the circle in inches."));
}else{
    //Prints your radius to the console
    console.log("You have entered " + radius + " inches for the radius of the circle.");
}
//Functions
//Anonymous Function
var circumference = function(radius){
    //Returns circumference of the circle
    return radius * 3.141592653589793
};
//Outputs
//Outputs info to the console
console.log("so you will have a circumference of " + circumference(radius) + " inches.");