async function fetchPeople() {
    const response = await fetch('/api/people_all');
    const people = await response.json();
    const dropdown = document.getElementById('personDropdown');
    
    for (const person of people) {
        const option = document.createElement('option');
        option.value = person.personID;
        option.textContent = person.name;
        dropdown.appendChild(option);   
    }
}
document.addEventListener('DOMContentLoaded', fetchPeople);


document.getElementById('personDropdown').addEventListener('change', async function(){
    const personID = this.value;
    console.log(`chosen person: ${personID}`);
    if (personID) {
        const response = await fetch(`/api/trips/${encodeURIComponent(personID)}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const trips = await response.json();
        
    const container = document.getElementById("tripResults");

    container.innerHTML = "";

    let continents = {};

    // crea struttura gerarchica
    for (const trip of trips) {

        if (!continents[trip.continent]) {
            continents[trip.continent] = {};
        }

        if (!continents[trip.continent][trip.country]) {
            continents[trip.continent][trip.country] = [];
        }

        continents[trip.continent][trip.country].push(trip);
    }

    // costruisce HTML
    for (const continent in continents) {

        const continentDiv = document.createElement("div");

        continentDiv.innerHTML =
            `<h2>${continent}</h2>`;

        for (const country in continents[continent]) {

            const countryDiv =
                document.createElement("div");

            countryDiv.innerHTML =
                `<h3>${country}</h3>`;

            for (const trip of continents[continent][country]) {

                const tripDiv =
                    document.createElement("div");

                tripDiv.classList.add("tripCard");

                tripDiv.innerHTML = `
                    <h4>${trip.destination}</h4>
                    <p>${trip.description}</p>
                    <p>Date: ${trip.date}</p>
                    <p>Status: ${
                        trip.have_been
                        ? "Visited ✅"
                        : "Wish 🌍"
                    }</p>
                    ${
                        trip.file_name
                        ? `<img src="images/${trip.file_name}" width="200">`
                        : ""
                    }
                `;

                countryDiv.appendChild(tripDiv);
            }

            continentDiv.appendChild(countryDiv);
        }

        container.appendChild(continentDiv);
    }
}
})