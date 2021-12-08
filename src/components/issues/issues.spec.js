import { mount } from '@vue/test-utils'
import issues from './issues'

describe('issues', () => {
  it('mount', () => {
    const wrapper = mount(issues)
  })

  it('выполняет эмит события loadIssues', async () => {
    const wrapper = mount(issues)

    await wrapper.find('.click-toggler').trigger('click')

    expect(wrapper.emitted().loadIssues.length).toBe(1)
  })

  it('отрисует список элементов', async () => {
    const issue = {
      title: 'test-title',
      user: '1231'
    }

    const wrapper = mount(issues, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    expect(wrapper.findAll('.issue').length).toBe(false)

    await wrapper.find('.click-toggler').trigger('click')

    expect(wrapper.findAll('.issue').length).toBe(6)
  })

  it('не вызываеь событие contentLoaded если внутри есть список issues', async () => {
    const issue = {
      title: 'test-title',
      user: '1231'
    }

    const wrapper = mount(issues, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    await wrapper.find('.click-toggler').trigger('click')

    expect(wrapper.emitted().loadIssues).toBeUndefined()
  })
})
