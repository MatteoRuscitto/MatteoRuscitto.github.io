let person = {
    name:"0",
    surname:"0",
    adress: "0",
    postalCode: "0",
    phoneNumber: "0",
    password:"0",
    birthYear:"0",
    detailesAndSuggestions:"0"
};


form.addEventListener('submit', objCreation);

function objCreation(evt) {
    evt.preventDefault();

    let name = document.getElementById(name).value;
    let surname = document.getElementById(surname).value;
    let adress = document.getElementById(adress).value;
    let postalCode = document.getElementById(postalCode).value;
    let phoneNumber = document.getElementById(phoneNumber).value;
    let password = document.getElementById(password).value;
    let birthYear = document.getElementById(birthYear).value;
    let detailesAndSuggestions = document.getElementById(detailesAndSuggestions);

    person.name.append(name);
    person.surname.append(surname);
    person.adress.append(adress);
    person.postalCode.append(postalCode);
    person.phoneNumber.append(phoneNumber);
    person.password.append(password);
    person.birthYear.append(birthYear);
    person.detailesAndSuggestions.append(detailesAndSuggestions);

    document.getElementById("output").innerText=
}