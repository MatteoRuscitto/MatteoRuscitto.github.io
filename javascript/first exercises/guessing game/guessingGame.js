let number = Math.random();
number = number *10 +1;
number = parseInt(number);
let numTries=0;

let guess = 0

do {
    guess = prompt ("guess a number from 1 to 10:")
    if (guess == number){
        document.getElementById("output1").innerText = "you guessed!good job";
    }else{
        if(guess < number){
            document.getElementById("output1").innerText = "number is too low, guess again";
        }else{
            document.getElementById("output1").innerText = "number is too high, guess again";
        }
    }
    numTries++;
}while(guess != number);

document.getElementById("output2").innerText = "number of tries:" + numTries;
