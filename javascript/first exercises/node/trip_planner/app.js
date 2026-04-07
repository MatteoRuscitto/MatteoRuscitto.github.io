
const express = require('express');
const app = express();

const PORT = 3000;


const Database = require('better-sqlite3');
const db = new Database('trip_planner.db');


const cors = require('cors');
app.use(cors());

app.get('/api/people_all', (req, res) => {
    const rows = db.prepare('SELECT personID, name FROM person').all();
    res.json(rows);
});


app.get('/api/trips/:personID', (req, res) => {

    const personID = req.params.personID;
    if (!personID) return res.status(400).json({ error: 'no user found' });

    const rows = db.prepare(`
        SELECT 
            continent.name AS continent,
            country.name AS country,
            trip.tripID,
            trip.destination,
            trip.description,
            wants_to_go.date,
            wants_to_go.have_been,
            foto.file_name,
            foto.title
        FROM wants_to_go
        JOIN trip ON wants_to_go.tripID = trip.tripID
        JOIN country ON trip.countryID = country.countryID
        JOIN continent ON country.continentID = continent.continentID
        LEFT JOIN foto ON trip.tripID = foto.tripID
        WHERE wants_to_go.personID = ?
        ORDER BY continent.name, country.name;
    `).all(personID);

    res.json(rows);
});

app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});