async function fetchData() {
    const response = await fetch('http://localhost:3000/api/fjell_info');
    const data = await response.json();
    console.log(data);
    
    for (let fjell of data) {
        let fjellDiv = document.createElement('div');
        fjellDiv.classList.add('fjell');
        fjellDiv.innerHTML = `
            <h3>${fjell.fjellnavn}</h3>
            <p>Høyde: ${fjell.hoyde} meter</p>
            <p>Beskrivelse: ${fjell.beskrivelse}</p>
            <img src="/photos/${fjell.foto}" alt="${fjell.fjellnavn}">
        `;
        document.body.appendChild(fjellDiv);
    }

    const resp = await fetch('http://localhost:3000/api/person');
    const data2 = await resp.json();

    for (let person of data2){
    
        let personDiv = document.createElement("div");
        personDiv.classList.add('person');
        personDiv.innerHTML = `
            <h3>${person.fornavn} ${person.etternavn} </h3>
            <p>Email: ${person.epost} </p>
        `;
        document.body.appendChild(personDiv);
    }

}

fetchData();

