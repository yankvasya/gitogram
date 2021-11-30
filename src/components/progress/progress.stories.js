import timeline from './progress'

export default {
  title: 'timeline',
  components: {
    timeline
  },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    },
    activeLine: { type: 'boolean' }
  }
}

export const defaultViewProgressLine = (args) => ({
  components: {
    timeline
  },
  data () {
    return {
      args
    }
  },
  template: `
    <timeline
      v-bind="args"
      @onFinish="args.onFinish" />
  `
})

defaultViewProgressLine.args = {
  activeLine: true
}

defaultViewProgressLine.story = {
  name: 'Стандартный вид'
}
