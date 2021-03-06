const express = require('express');
const router = express.Router();

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('database.sqlite3');
// initialize
db.serialize(function() {
    db.run("DROP TABLE IF EXISTS users;")
    .run("CREATE TABLE IF NOT EXISTS users (\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        username TEXT,\
        password TEXT,\
        email TEXT,\
        title TEXT);")
        .run("INSERT INTO users (username, password, email, title) \
        VALUES ('admin', 'admin', 'admin@admin.com', 'provider'), \
        ('qwang70', 'qwang70', 'qwang70@illinois.edu', 'seeker'), \
        ('julie', 'qwang70', 'julie@gmail.com', 'seeker'), \
        ('cuteGirl', 'cugi', 'cuteGirl@gmail.com', 'seeker'), \
        ('jping', 'jping', 'jping@gmail.com', 'provider'),\
        ('goodGuy', 'gdgy', 'goodGuy@gmail.com', 'provider');");
    });

router.post('/register', (req, res) => {
    console.log( 'test register', req.body);
    db.serialize(function() {
        db.run("INSERT INTO users (username, password, email, title) VALUES (?, ?, ?, ?);", 
            [req.body.username, req.body.password, req.body.email, req.body.title], function(err, row){
            if (err){
                console.error(err);
                res.status(400);
            }

        });
        db.get("SELECT id FROM users WHERE username = ?;", req.body.username, function(err, row){
            if (err){
                console.error(err);
                res.status(409);
            }
            else {
                res.status(201).json({userId: row.id});
            }
        });
    });
    
});

router.post('/login', (req, res, next) => {
    db.get("SELECT * FROM users WHERE email = ? and password = ?;", [req.body.email, req.body.password],
     function(err, row){
        if(row){
            res.json({ userId : row.id,
            username : row.username });
        }
        else{
            res.status(404).json({error: "User does not exist"});
        }
    });
});


router.get('/users/:userId', (req, res, next) => {
    db.get("SELECT * FROM users WHERE id = ?;", [req.params.userId],
     function(err, row){
        if(row){
            res.json(row);
        }
        else{
            res.status(404).json({error: "User does not exist"});
        }
    });
});

module.exports = router;
