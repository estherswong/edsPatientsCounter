const Sequelize = require('sequelize')
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Patient', {
        keyName: {
            type: Sequelize.STRING,
        },
        keyValue: {
           type: Sequelize.INTEGER,
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    })
}