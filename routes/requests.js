const express = require('express');
const router = express.Router();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.sqlite3');
// initialize
db.serialize(function() {
    db.run("DROP TABLE IF EXISTS requests;")
    .run("CREATE TABLE IF NOT EXISTS requests (\
        requestId INTEGER PRIMARY KEY AUTOINCREMENT,\
        userId INTEGER, \
        status TEXT,\
        resource TEXT,\
        description TEXT,\
        lat REAL,\
        lng REAL);")
        .run("INSERT INTO requests (userId, status, resource, description, lat, lng) \
        VALUES (2, 'requested', 'A Blanket', 'Hi, I am Julie. I need a blanket for the winter',\
        40.692831, -73.988686), \
        (2, 'received', 'Clothes', 'Hi, I need some clothes for my 8 yr old boy',\
        41, -74)");
    });
router.get('/', (req, res) => {
    console.log("user");
    res.status(200).end();
});
router.get('/:userId/requests', (req, res, next) => {
    console.log("request", req.params.userId);
    db.all("SELECT * FROM requests WHERE userId = ?;", [req.params.userId],
        function(err, rows){
        if(rows){
            res.status(200).json(rows);
            // res.json({ "requestId" : row.requestId,
            // "status" : row.status,
            // "resource": row.resource,
            // "description": row.description}
        // );
        }
        else{
            res.status(404).json({error: "No request for the user."});
        }
    });
});