// COMP 72C
const http = require('http');
const path = require('path');
const express = require('express');
const axios = require('axios');
const massive = require('massive');
const session = require("express-session");
const process = require("process");
// COMP 76F
const bodyParser = require('body-parser');
const cors = require('cors')

const dCtrl = require('./controllers/data_controller');
// COMP 74C
const app = express();
app.use(bodyParser.json());
app.use(cors());

const CLIENT_ID = '22CFSG';
const CLIENT_SECRET = 'ffb7405c22f3c71b44ddf53c408f093d';
const SESSION_SECRET = 'ytrhcyftrtrsedthrdyu';
const CALLBACK_URL = 'http://localhost:8080/callback';


// Use the session middleware
// COMP 70C
massive('postgres://ahqvwbzkaxiylb:2483305b5edb7da64f1e4dbc63dc98c91cc70c6998d3fbb9fbb78e98206a608e@ec2-54-163-249-237.compute-1.amazonaws.com:5432/d8dl2c3o4vsdt?ssl=true').then( (db) => {
    console.log('Connected to Heroku')
    app.set('db', db);
})

app.use(session({
     secret: SESSION_SECRET, 
     cookie: { maxAge: 60000 },
     resave: false,
     saveUninitialized: true
    }));



//Endpoints
// COMP 74D-1
// COMP 76C
app.get(`/api/getUser/:id`, dCtrl.getUser)

// COMP 74D-2
app.post(`/api/createUser/`, dCtrl.createUser)

// COMP 74D-3
app.put(`/api/updateUser/:id`, dCtrl.updateUser)

// COMP 74D-4
app.delete(`/api/deleteUser/:id`, dCtrl.deleteUser)



// launch the server
const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));