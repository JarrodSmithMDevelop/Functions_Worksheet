/**
 * Jarrod Smith
 * 10/20/15
 * Functions Worksheet - Stung
 * SDI 1510 Section 1
 */


//Variables

var weight;                         //Weight of an individual

//Inputs

weight = Number(prompt("Enter a weight."));

if (weight === 0){
    weight = Number(prompt("Please enter a weight."));
}

//Functions

function numStings(weight){
    //Calculate number of stings
    return weight * 8.666666667;
}

//Outputs

console.log("If the victim weighs " + weight + " pounds, then it will take " + numStings(weight) + " in order to be fatal.")