<template>
  <div class="count">
    <h1> Count of Patients with EDS by Subtypes </h1>
    <body>Click increment to record a new patient with Ehlers-Dalos Syndrome (organized by subtype).</body>
    <h2>
      <v-btn
        v-on:click="showTable"> Show Table </v-btn>
    </h2>
    <h3>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class = "text-left">
                Name of EDS Subtype
              </th>
              <th class = "text-left">
                Count of Patient(s)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for= "value in values"
              :key = "value.id"
            >
              <td>{{value.keyName}}</td>
              <td>{{value.keyValue}}</td>
              <v-btn
                v-on:click="increment(value.keyName, value.keyValue)">Increment</v-btn>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </h3>
  </div>
</template>

<script>
import PatientCounter from '../../services/PatientCounter'
import axios from 'axios'

export default{
  data () {
    return {
      values: []
    }
  },
  methods: {

    showTable: function () { // displays table to user
      PatientCounter.getAllPatients().then((res) => {
        this.values = res.data.data
      })
    },
    increment: function (key, value) { // updates keyValue by an increment of one
      PatientCounter.incrementPatientCount(key, value).then((res) => {
        this.values = res.data.data
      })
    }
  },
  async mounted () {
    try {
      axios.get('http://localhost:8080/')
        .then(response => { this.values.keyValue = response.data })
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 10;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
