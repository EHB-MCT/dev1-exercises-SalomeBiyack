"use strict";

setup();

function setup(){

    let numbers = [];

//functie voor aantal nummers die nodig zijn
//math.random geeft zwz getal tussen 0en1
    for (let i = 0; i < 1000; i++) {
        numbers[i]=Math.random()*100
    }

    calculateAverage(numbers);
}

function calculateAverage(listOfNumbers){
    let sum = 0
    for(let i = 0; i < listOfNumbers.lenght; i++){
        sum += listOfNumbers[i]

    }

return sum/listOfNumbers.lenght;

}