require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser') 
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')

const config = require('./config/config')
const app = express()
const db = require("./models") 
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({extend: true}))

require('./routes')(app)

db.sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
