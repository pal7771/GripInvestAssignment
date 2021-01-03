const mysql = require('mysql');

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const e = require('express');

app.use( bodyparser.json() );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var mysqlConnection = mysql.createConnection({ 
    host:'localhost',
    port:3306,
    user: 'root',
    password: '', 
    database: 'Entities'
});

mysqlConnection.connect( (err) => {
    if(!err) {
        console.log("connection established");
    } else {
        console.log("connection failed");
    }
});

app.listen(3001, ()=> console.log("Express is running at port 3001") );


//get all assets
app.get("/assets", (req, res) => {
    mysqlConnection.query("SELECT * FROM assets", (err, rows, feilds) => {
        if( !err ) {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})


//to get all orders
app.get("/orders", (req, res) => {
    mysqlConnection.query("SELECT * FROM orders", (err, rows, feilds) => {
        if( !err ) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})


//to get all clients
app.get("/clients", (req, res) => {
    mysqlConnection.query("SELECT * FROM clients", (err, rows, feilds) => {
        if( !err ) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})
