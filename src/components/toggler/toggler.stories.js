import toggler from './toggler'

export default {
  title: 'x-toggler',
  components: { toggler },
  argTypes: {
    toggle: {
      action: 'onToggle',
      description: 'if toggle'
    }
  },
  doNotChange: { type: 'text' }
}

export const DefaultViewToggler = (args) => ({
  components: {
    toggler
  },
  data () {
    return {
      args
    }
  },
  template: `
    <toggler
      v-bind="args"
      @toggle="args.toggle"
    />
  `
})

DefaultViewToggler.story = {
  name: 'Стандартный вид'
}

DefaultViewToggler.args = {
  doNotChange: false
}
