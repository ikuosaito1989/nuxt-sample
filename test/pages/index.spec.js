import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  const wrapper = mount(Index)

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  describe('computed', () => {
    test('`title`が取得できること', () => {
      expect(wrapper.vm.title).toBe('sample')
    })
  })
})
