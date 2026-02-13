
form.addEventListener('submit', takeAnswer);

function checkDiscount(code){
    for (let i in range (i=0, i<acceptedCodes.length,i++)){
        if (discountCode==acceptedCodes[i]){
            return true;
        }
    }
}
function takeAnswer(evt) {
    evt.preventDefault();

    let name = document.getElementById(name).value;
    let surname = document.getElementById(surname).value;
    let email = document.getElementById(email).value;
    let password = document.getElementById(password).value;
    let discountCode = document.getElementById(discountCode).value;

    checkDiscount(discountCode);

    document.getElementById("output1").innerText="Thank you for your registration, " + name;
    if (checkDiscount==true){
        document.getElementById("output2").innerText="You have entered a discount code and receive a discounted price";
    }
}

let acceptedCodes =["1234", "5678", "9102", "3456"];

