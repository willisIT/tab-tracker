const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config')

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('combined'));

app.get('/', (req, res, next)=>{
    res.status(200).json({msg: "Hello"});
    console.log('Connected');
})

require('./routes')(app)

sequelize.sync({force: false})
    .then(() =>  {
        app.listen(config.port);
        console.log(`Server started on port ${config.port}`)
    })
