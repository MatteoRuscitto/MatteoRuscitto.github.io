
let remainingThrows = 3;
document.getElementById("remainingThrows").textContent = remainingThrows;

let locked = [false, false, false, false, false]; 

let throwButton = document.getElementById("throw")

throwButton.addEventListener("click",rollDices)

for (let i = 1; i <= locked.length; i++) {
    const img = document.getElementById("image" + i);
    img.addEventListener("click", function() {
        locked[i - 1] = !locked[i - 1]; 
        img.style.opacity = locked[i - 1] ? "0.5" : "1";
    });
}


function rollDices(){
    if (remainingThrows <= 0) return;
    for (let index = 1; index < locked.length; index++) {
        if (locked[index - 1]==true){
            continue;
        }else{
            rollDice('image' + index);
        }
    }
    remainingThrows--;
    document.getElementById("remainingThrows").textContent = remainingThrows;

    if (remainingThrows === 0) {
        document.getElementById("throw").disabled = true;
}
}


function rollDice(diceNumber) {

    let diceRoll=0

    diceRoll = getRandomIntInclusive(1, 6);
    switch (diceRoll) {
    case 1:
        document.getElementById(diceNumber).src = 'images/dice-six-faces-1.png';
        break;
    case 2:
        document.getElementById(diceNumber).src = 'images/dice-six-faces-2.png';
        break;
    case 3:
        document.getElementById(diceNumber).src = 'images/dice-six-faces-3.png';
        break;
    case 4:
        document.getElementById(diceNumber).src = 'images/dice-six-faces-4.png';
        break;
    case 5:
        document.getElementById(diceNumber).src = 'images/dice-six-faces-5.png';
        break;
    case 6:
        document.getElementById(diceNumber).src = 'images/dice-six-faces-6.png';
        break;
    }
    console.log(diceRoll);
}


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

let dicesArray = document.querySelectorAll("img");

let oneButton = document.getElementById("button1")
oneButton.addEventListener("click", () => {
    countPoints(1);
});
let twoButton = document.getElementById("button2")
twoButton.addEventListener("click", () => {
    countPoints(2);
});
let threeButton = document.getElementById("button3")
threeButton.addEventListener("click", () => {
    countPoints(3);
});
let fourButton = document.getElementById("button4")
fourButton.addEventListener("click", () => {
    countPoints(4);
});
let fiveButton = document.getElementById("button5")
fiveButton.addEventListener("click", () => {
    countPoints(5);
});
let sixButton = document.getElementById("button6")
sixButton.addEventListener("click", () => {
    countPoints(6);
});

function countPoints (no){
    dicesArray = document.querySelectorAll("img");
    let points = 0;
    let Counter= 0;
    for (let index = 0; index < locked.length; index++) {
        if (dicesArray[index].src.includes('dice-six-faces-' + no + '.png')) {
            Counter = Counter + 1;
        }
    }
    points=Counter * no;

    document.getElementById(no + "Points").textContent= points;
    document.getElementById("button" + no).disabled=true;
    document.getElementById("throw").disabled = false;
    remainingThrows = 3;
    document.getElementById("remainingThrows").textContent = remainingThrows;
    locked = [false, false, false, false, false]; 
    for (let i = 1; i <= locked.length; i++) {
        const img = document.getElementById("image" + i);
        img.style.opacity = locked[i - 1] ? "0.5" : "1";
    }
}

let trisButton = document.getElementById("tris")
trisButton.addEventListener("click", () => {
    trisPoints();
});

function trisPoints(){
    dicesArray = document.querySelectorAll("img");
    let points = 0;
    let Counter= 0;
    for (let index = 0; index < 6; index++) {
        for (let i=0; i<6; i++){
            if (dicesArray[i].src.includes('dice-six-faces-' + (index+1) + '.png')) {
                Counter++;
            }
            if (Counter >= 3){
                points=
            }
        }
    }

}