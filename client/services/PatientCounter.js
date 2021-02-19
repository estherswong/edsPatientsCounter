import Api from './Api'

export default {
    getAllPatients(){
        return Api().get('/patient')
    },
    incrementPatientCount(key, newPatientCount){ 
        return Api().put(`/patient/${key}`, {            
            patientCount : newPatientCount
        })
    }
}
