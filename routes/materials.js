const express = require('express');
const router = express.Router({mergeParams: true});

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.sqlite3');
// initialize
db.serialize(function() {
    db.run("DROP TABLE IF EXISTS materials;")
    .run("CREATE TABLE IF NOT EXISTS materials (\
        materialId INTEGER PRIMARY KEY AUTOINCREMENT,\
        userId INTEGER, \
        providerId INTEGER, \
        status TEXT,\
        resource TEXT,\
        description TEXT,\
        lat REAL,\
        lng REAL);")
        .run("INSERT INTO materials (userId, status, resource, description, lat, lng) \
        VALUES (2, 'requested', 'A Blanket', 'Hi, I am Julie. I need a blanket for the winter',\
        40.692831, -73.988686), \
        (2, 'received', 'Clothes', 'Hi, I need some clothes for my 8 yr old boy',\
        40.692831, -73.988686), \
        (3, 'requested', 'Band Aid', 'band aid for my ankle',\
        40.672604, -73.971670), \
        (3, 'requested', 'School Suppliers', 'pencils, notebooks, rulers for kids to go to school. Thank you!',\
        40.672604, -73.971670), \
        (4, 'requested', 'diaper', 'badly in need of diaper',\
        40.711749, -73.985875)");
    });
    
// get all materials
router.get('/allMaterials', (req, res, next) => {
    db.all("SELECT * FROM materials;",
        function(err, rows){
        if(rows){
            res.status(200).json(rows);
        }
        else{
            res.status(404).json({error: "No request for the user."});
        }
    });
});
    
// get materials requested by the user
router.get('/materials', (req, res, next) => {
    db.all("SELECT * FROM materials WHERE userId = ?;", [req.params.userId],
        function(err, rows){
        if(rows){
            res.status(200).json(rows);
        }
        else{
            res.status(404).json({error: "No request for the user."});
        }
    });
});


// post the material by the user
router.post('/materials', (req, res, next) => {
    console.log("print body", req.body);
    db.run("INSERT INTO materials (userId, status, resource, description, lat, lng) \
            VALUES (?, 'requested', ?, ?, ?, ?)", 
        [req.params.userId, req.body.resource, req.body.description, req.body.location.lat, req.body.location.lng],
        function(err, row){
        if(err){
            res.status(409).json({error: "Something happened"});
        }
        else{
            res.status(200).end();
        }
    });
});

// deliver the material by the user
router.put('/materials/:materialId', (req, res, next) => {
    db.serialize(function() {
        db.run("UPDATE materials \
            SET status = ?,\
            providerId = ? \
            WHERE materialId = ?;", 
            [req.body.status, req.params.userId, req.params.materialId],
            function(err, row){
            if(err){
                res.status(404).json({error: "Something happened"});
            }
        })
        .get("SELECT * FROM materials WHERE materialId = ?;", req.params.materialId,
        function(err, row){
            if(err){
                res.status(404).json({error: "Something happened"});
            }
            else if(row){
                res.status(200).json(row);
            };
        });
    });
});

// db.all("SELECT * FROM materials", function(err, rows){
//     if(rows){
//         rows.forEach((row) => {
//             console.log(row.name);}
//         );
//     }
//     else{
//         res.status(404).json({error: "No request for the user."});
//     }
// });
module.exports = router;