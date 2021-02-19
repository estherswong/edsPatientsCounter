const dotenv = require('dotenv');
const { Sequelize, DataTypes } = require('sequelize');
const model = require('../models');
dotenv.config;
const Patients = model.Patient
module.exports = {
    async getAllPatients(req, res) {  //queries all values in Patients table from MySql database.   
        try{
            Patients.findAll().then(data => {
                res.json({data})
            })
        } catch (err) {
            res.status(500).send({
                error: 'The request did not work.'
            })
        }
    },
    async incrementPatientCount(req, res) { //for the specific keyValue (EDS Subtype), updates keyValue by an increment of one
        try {
            Patients.update({keyValue: req.body.patientCount + 1}, 
                {where: { keyName: req.params.key}
            })
                .then(function(result) {
                    if(result)
                    {
                        Patients.findAll().then(data => {
                                res.json({data})
                            })
                    } else{
                        res.status(404).send({
                            error:'The request did not work.'
                        })
                    }
                })
        } catch (err) {
            res.status(500).send({
                error: 'The request did not work.'
            })
        }
    }  
}




