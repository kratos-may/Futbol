require('dotenv').config();
const express = require("express");
const bodyParser  = require("body-parser");
const cors = require('cors')
let router = express.Router();    
const routes = require('./src/routes');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const front_port = 'http://localhost:8001'; 

app.use(
  cors({
    origin: `${front_port}`,
    credentials: true
  })
);

app.use('/',routes());
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});