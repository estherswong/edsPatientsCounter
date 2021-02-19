import Vue from 'vue'
import Router from 'vue-router'
import Patient from '@/components/Patient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Patient',
      component: Patient
    }
  ]
})
