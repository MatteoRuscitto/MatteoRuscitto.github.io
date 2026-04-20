// fetch all the people and fill the dropdown
async function fetchPeople() {
    const response = await fetch('/api/people_all');
    const people = await response.json();
    console.log(people);

    const dropdown = document.getElementById('personDropdown');
    
    for (const person of people) {
        const option = document.createElement('option');
        option.value = person.personID;
        option.textContent = person.name;
        dropdown.appendChild(option);   
    }
}
document.addEventListener('DOMContentLoaded', fetchPeople);

//fetch all trips for the selected person
async function fetchTrips() {

    const personID =
        document.getElementById("personDropdown").value;

    const response =
        await fetch(`/api/trips/${personID}`);

    const trips = await response.json();

    const container =
        document.getElementById("tripResults");

    container.innerHTML = "";

    let continents = {};

    // create structure
    for (const trip of trips) {

        if (!continents[trip.continent]) {
            continents[trip.continent] = {};
        }

        if (!continents[trip.continent][trip.country]) {
            continents[trip.continent][trip.country] = [];
        }

        continents[trip.continent][trip.country].push(trip);
    }

    // making the contintents dropdown
    for (const continent in continents) {

        const continentDiv =
            document.createElement("div");

        const continentTitle =
            document.createElement("h2");

        continentTitle.textContent =
            continent + " ▼";

        continentTitle.style.cursor = "pointer";

        const countriesContainer =
            document.createElement("div");

        countriesContainer.style.display = "none";

        // continent toggle behaviour
        continentTitle.onclick = () => {

            const open =
                countriesContainer.style.display === "none";        //don't show the container

            countriesContainer.style.display =
                open ? "block" : "none";                //if open show the countries else don't

            continentTitle.textContent =
                continent + (open ? " ▲" : " ▼");
        };

        // making the contintents dropdown
        for (const country in continents[continent]) {

            const countryDiv =
                document.createElement("div");

            const countryTitle =
                document.createElement("h3");

            countryTitle.textContent =
                country + " ▼";

            countryTitle.style.cursor = "pointer";

            const tripsContainer =
                document.createElement("div");

            tripsContainer.style.display = "none";

            // country toggle behaviour
            countryTitle.onclick = () => {

                const open =
                    tripsContainer.style.display === "none";        //don't show the container

                tripsContainer.style.display =
                    open ? "block" : "none";        //if open show the trips else don't

                countryTitle.textContent =
                    country + (open ? " ▲" : " ▼");
            };
            
            //filling with the trips
            for (const trip of
                continents[continent][country]) {

                const tripDiv =
                    document.createElement("div");

                tripDiv.classList.add("tripCard");          //add CSS class

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

                tripsContainer.appendChild(tripDiv);
            }

            countryDiv.appendChild(countryTitle);
            countryDiv.appendChild(tripsContainer);

            countriesContainer.appendChild(countryDiv);
        }

        continentDiv.appendChild(continentTitle);
        continentDiv.appendChild(countriesContainer);

        container.appendChild(continentDiv);
    }
}

//go to addTrip page (for button)
function goToAddTrip() {

    window.location.href = "addTrip.html";

}