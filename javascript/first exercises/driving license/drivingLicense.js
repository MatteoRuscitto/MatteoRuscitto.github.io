let age = parseInt(input("insert you age: "))

switch (true) {
    case age < 16:
        document.getElementById("output").innerText = "user is too young to get a license";
        break;
    case age = 16:
        document.getElementById("output").innerText = "you can get a moped license";
        break;
    case age <= 18:
        document.getElementById("output").innerText = "you can get a car license";
        break;
    case age <= 21:
        document.getElementById("output").innerText = "you can get a truck license";
        break;
    case age <= 24:
        document.getElementById("output").innerText = "you can get a bus license";
        break;
    case age >= 60:
        document.getElementById("output").innerText = "you must undergo regular check-ups";
        break;
}