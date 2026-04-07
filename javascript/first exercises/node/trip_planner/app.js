
const express = require('express');
const app = express();

const PORT = 3000;


const Database = require('better-sqlite3');
const db = new Database('trip_planner.db');


const cors = require('cors');
app.use(cors());

// Middleware for å servere statiske filer fra "public" mappen
app.use(express.static('public'));

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

app.use(express.json());

app.post('/api/add_trip', (req, res) => {

    const {
        personID,
        destination,
        description,
        countryID,
        date,
        have_been
    } = req.body;

    if (!personID || !destination || !countryID) {

        return res.status(400).json({
            error: "missing fields"
        });
    }

    const tripInsert = db.prepare(`
        INSERT INTO trip
        (destination, description, countryID)
        VALUES (?, ?, ?)
    `);

    const result = tripInsert.run(
        destination,
        description,
        countryID
    );

    const tripID = result.lastInsertRowid;

    const relationInsert = db.prepare(`
        INSERT INTO wants_to_go
        (personID, tripID, date, have_been)
        VALUES (?, ?, ?, ?)
    `);

    relationInsert.run(
        personID,
        tripID,
        date,
        have_been
    );

    res.json({
        message: "Trip added successfully"
    });
});

app.get('/api/countries', (req, res) => {

    const rows = db.prepare(`
        SELECT countryID, name
        FROM country
        ORDER BY name
    `).all();

    res.json(rows);
});