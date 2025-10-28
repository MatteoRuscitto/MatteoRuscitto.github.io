let age = parseInt(input("insert you age: "))

switch (age) {
    case < 16:
        document.getElementById("output").innerText = "user is too young to get a license";
        break;
    case 16:
        document.getElementById("output").innerText = "you can get a moped license";
        break;
    case <= 18:
        document.getElementById("output").innerText = "you can get a car license";
        break;
    case <= 21:
        document.getElementById("output").innerText = "you can get a truck license";
        break;
    case <= 24:
        document.getElementById("output").innerText = "you can get a bus license";
        break;
    case >= 60:
        document.getElementById("output").innerText = "you must undergo regular check-ups";
        break;
}