const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

app.get('/', (req, res, next)=>{
    res.status(200).json({msg: "Hello"});
    console.log('Connected');
})

app.listen(process.env.PORT || 4000);