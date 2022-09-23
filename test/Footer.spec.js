import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'
import Vue from 'vue'

Vue.config.silent = true

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer, {
      stubs: { NuxtLink: true },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
