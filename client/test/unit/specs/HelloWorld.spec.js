import Vue from 'vue'
import Patient from '@/components/Patient'

describe('Patient.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Patient)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
