// fetch all the people and fill the dropdown
async function fetchPeople() {

    const response =
        await fetch('/api/people_all');

    const people =
        await response.json();

    const dropdown =
        document.getElementById('personDropdown');

    for (const person of people) {

        const option =
            document.createElement('option');

        option.value = person.personID;

        option.textContent = person.name;

        dropdown.appendChild(option);
    }
}

document.addEventListener("DOMContentLoaded",fetchPeople);

// fetch all the countries and fill the dropdown
async function loadCountries() {

    const response =
        await fetch("/api/countries");

    const countries =
        await response.json();

    const select =
        document.getElementById("countrySelect");

    for (const country of countries) {

        const option =
            document.createElement("option");

        option.value = country.countryID;

        option.textContent = country.name;

        select.appendChild(option);
    }
}

document.addEventListener(
    "DOMContentLoaded",
    loadCountries
);

//get all the data about the trip to send
async function addTrip() {

    const personID =
        document.getElementById("personDropdown").value;

    const destination =
        document.getElementById("destination").value;

    const description =
        document.getElementById("description").value;

    const countryID =
        document.getElementById("countrySelect").value;

    const date =
        document.getElementById("date").value;

    const have_been =
        document.getElementById("status").value;

    await fetch("/api/add_trip", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            personID,
            destination,
            description,
            countryID,
            date,
            have_been
        })
    });

    alert("Trip saved!");

}