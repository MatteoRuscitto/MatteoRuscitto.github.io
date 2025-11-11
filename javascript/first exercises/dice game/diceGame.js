let form = document.getElementById('form');

form.addEventListener('submit', rollDice);

function rollDice(evt) {
    evt.preventDefault();

    console.log('Function running...');

    let numLanci= document.getElementById("numLanci").value;
    console.log(numLanci)


    let diceRoll=0

    for (let i = 0; i < numLanci; i++) {
        diceRoll = getRandomIntInclusive(1, 6);
        switch (diceRoll) {
        case 1:
            document.getElementById('image').src = 'images/dice-six-faces-one.png';
            //document.getElementById("diceImg").imgElement.src= "/javascript/first exercises/dice game/images/dice-six-faces-one.png";
            break;
        case 2:
            document.getElementById('image').src = 'images/dice-six-faces-two.png';
            //document.getElementById("diceImg").imgElement.src= "/javascript/first exercises/dice game/images/dice-six-faces-two.png";
            break;
        case 3:
            document.getElementById('image').src = 'images/dice-six-faces-three.png';
            //document.getElementById("diceImg").imgElement.src= "/javascript/first exercises/dice game/images/dice-six-faces-three.png";
        case 4:
            document.getElementById('image').src = 'images/dice-six-faces-four.png';
            //document.getElementById("diceImg").imgElement.src= "/javascript/first exercises/dice game/images/dice-six-faces-four.png";
            break;
        case 5:
            document.getElementById('image').src = 'images/dice-six-faces-five.png';
            //document.getElementById("diceImg").imgElement.src= "/javascript/first exercises/dice game/images/dice-six-faces-five.png";
            break;
        case 6:
            document.getElementById('image').src = 'images/dice-six-faces-six.png';
            //document.getElementById("diceImg").imgElement.src= "/javascript/first exercises/dice game/images/dice-six-faces-six.png";
            break;
        }
        console.log(diceRoll);
        document.getElementById("output").innerText= "the dice rolled" + diceRoll
    
    }
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}