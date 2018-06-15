const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const morgan = require('morgan');
const urlEncodedParser = bodyParser.urlencoded({extended: true});
const PORT = 3000;
const views = require("./views");
const { db } = require('./models');

db.authenticate().then(()=>{
  console.log('connected to the datbase');
});
app.use(express.static(__dirname + "/public"));
app.use(morgan('dev'));
app.use(urlEncodedParser);

app.get('/', (req, res, next) => {
  res.send(views.main());
});


app.listen(PORT, () => {console.log('Listening on Port:' + PORT)});
