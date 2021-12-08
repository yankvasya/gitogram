import { shallowMount } from '@vue/test-utils'
import toggler from './toggler'

describe('toggler component', () => {
  it('toggler существует', () => {
    const wrapper = shallowMount(toggler)
    expect(wrapper.find('.toggler').exists()).toBe(true)
  })

  it('изменяет надпись при клике', async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.toggler__title').text()).toBe('Show issues')

    await wrapper.find('a').trigger('click')

    expect(wrapper.find('.toggler__title').text()).toBe('Hide issues')
  })
})
