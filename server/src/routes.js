const Sequelize = require('sequelize')
const config = require('./config/config')
const PatientCountController = require('./controllers/PatientCountController')
module.exports = (app) => {
    app.get('/patient',
        PatientCountController.getAllPatients),
    app.put('/patient/:key',
        PatientCountController.incrementPatientCount)
}

