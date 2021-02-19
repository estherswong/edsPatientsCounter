const fs = require('fs')
const path = require('path')
const Sequelize = require('Sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs 
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js' 
    )
    .forEach((file) => {
        const pathJoin = path.join(__dirname, file)
        const exportedModelFunction = require(pathJoin) 
        const model = exportedModelFunction(sequelize, Sequelize.DataTypes) 
        db[model.name] = model
    })

db.sequelize = sequelize 
db.Sequelize = Sequelize
module.exports = db
