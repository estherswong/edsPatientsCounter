# edsPatientCounter

The following project is a fullstack website that displays the count of patients with Ehlers-Danlos Syndrome, a genetic disorder that impacts connective tissues, by subtype. There are a total of 13 different subtypes, each displayed on the table; more information about each subtype can be found [here](https://www.ehlers-danlos.com/eds-types/). 

A possible use case scenario for this project would be if a rheumatology office wanted to keep track of the total number of patients with each subtype of EDS that the office has ever served.

 Clicking the button "Show Table Data" will show a table with 2 columns: (1)  EDS Subtype and (2) Count of Patient(s). The below table provides an example of what the table would look like for the hypermobile EDS subtype with a count of 17 patients. 

| EDS Subtype            | Count of Patient(s)          
| ---------------------- |:--------------------:| 
| Hypermobile EDS (hEDS) | 17                   |

Each row has an increment button. Using the example of a rheumatology office, if the office had a new patient with hEDS, the office would click "Increment" to add one to the patient count. In this example, pressing increment, would increase the count of patient(s) with hEDS from 17 to 18. 

More information on how each of the buttons are set up to interact with the server and database can be found below. 
 

## Overview of Project Organization

The project is broken down into 2 main components: Client and Server.

Client: This project uses Vue.JS for the frontend. The client also makes API requests through Axios. 

Server: The server is made using Node.JS and Express. 

Database: Additionally, the server queries from a MySql database. The sever uses Sequelize to interact with the database. Configuration for the database and Model for the Patient table can be found under (server >> src >> config.js) and (server >> src >> models >> Patient.js)

### Prerequisites for Using the Project

In order for this project to work, you must have the following installed: Node.js (latest version), NPM, Vue-tify, and MySql Server.

The project also requires a "development" database and all 13 EDS subtypes inserted into the Patient table. To create the Patient table, run npm start on the server. The server will create the Patient table if one does not already exist. The following query can be run to set up the database:

``` SQL
INSERT INTO Patients (keyName, keyValue, CreatedAt) 
VALUES('Classical EDS (cEDS)', 0, CURRENT_TIMESTAMP),
 ('Classical-like EDS (clEDS)', 0, CURRENT_TIMESTAMP),
  ('Cardiac-valvular EDS (cvEDS)', 0, CURRENT_TIMESTAMP), 
  ('Vascular EDS (vEDS)', 0, CURRENT_TIMESTAMP), 
  ('Hypermobile EDS (hEDS)', 0, CURRENT_TIMESTAMP), 
  ('Arthrochalasia EDS (aEDS)', 0, CURRENT_TIMESTAMP), 
  ('Dermatosparaxis EDS (dEDS)', 0, CURRENT_TIMESTAMP), 
  ('Kyphoscoliotic EDS (kEDS)', 0, CURRENT_TIMESTAMP), 
  ('Brittle Cornea Syndrome (BCS)', 0, CURRENT_TIMESTAMP), 
  ('Spondylodysplastic EDS (spEDS)',0, CURRENT_TIMESTAMP), 
  ('Musculocontractural EDS (mcEDS)',0, CURRENT_TIMESTAMP), 
  ('Myopathic EDS (mEDS)', 0, CURRENT_TIMESTAMP), 
  ('Periodontal EDS (pEDS)', 0, CURRENT_TIMESTAMP);
```

### Running the Project on Your Local Environement

To run the project change directory to where the project is located. CD into the client folder and in a seperate tab, CD into the server folder. 
The project uses "npm run dev" in the client terminal and "npm start" in the server terminal. 

## Client API Requests (How the Buttons Work)
The client has two buttons that a user will see when loading the project: "Show Table Data" and "Increment." The Incremement button is shown when the table loads; each subtype has its own Increment button. The User Interface for both buttons can be found under client>> src>> components>> Patient.vue. The below describe how each of the buttons work. 

### "Show Table Data" Button:
When the user clicks this button, the client will call on the "showTable" method found under Patient.Vue. Patient.Vue uses the getAllPatients method found under "PatientCounter.js" (found in the client >> services) folder. The getAllPatients in turn calls the Api.js (also in the client>> services folder) which creates an axios instance to send a GET request to the server using the '/patient' path.

From there, the server receives the GET request and follows the '/patient' path under routes.js (found in server>> src >> seed). routes.js calls on getAllPatients() from PatientCountController (found in server>>src>>controllers) which uses the Sequelize method .findAll() to query table values from the database. The server returns the jSON data response back to the client.


### "Increment" Button:
When the user clicks this button, the client will call on the "increment" method found under Patient.Vue. Patient.Vue uses the incrementPatientCount method found under "PatientCounter.js" (found in the client >> services) folder. The incrementPatientCount in turn calls the Api.js (also in the client>> services folder) which creates an axios instance to send a PUT request to the server using the '/patient/' path.

From there, the server receives the PUT request and follows the '/patient/' path under routes.js (found in server>> src >> seed). routes.js calls on incrementPatientCountMethod from PatientCountController (found in server>>src>>controllers) which uses the Sequelize method .update() to update the database at the specific keyName for which the Incrememnt button is linked to. If the update is successful, incrementPatientCountMethod uses the findAll() Sequelize method to query the udpated value from the database. The server returns the jSON data response back to the client.



## Possible Future Uses and Versions
Following the example of the use case of a rheumatology office, a possible future version could include a "Sum Total EDS Patient Count" button, an authentication page, or a hypermobile EDS test form a rheumatologist could fill out when diagnosing a patient.

A future state goal of the build out of this website could be to:
    (1) Gather insights on whether certain symptoms (such as Rayund's Syndrome or Postural Orthostatic Tachycardia Syndrome) are more common with each EDS subtype by mapping current patients' symptoms of each subtype and then 
    (2) Use the data to analyze whether any current patient who does not have a diagnosis of EDS (for example, due to lack of awareness about EDS) could possibly have EDS. 




