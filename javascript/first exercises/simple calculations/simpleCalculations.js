let city1 = prompt ("insert the name of the city nr.1");
let lenghtCity1 = city1.length;
let city2 = prompt ("insert the name of the city nr.2");
let lenghtCity2 = city2.length;

let difference = Math.abs(lenghtCity1 - lenghtCity2);

document.getElementById("output").innerText = difference;

