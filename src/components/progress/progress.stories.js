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
    }
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
    <timeline @onFinish="args.onFinish" />
  `
})

defaultViewProgressLine.story = {
  name: 'Стандартный вид'
}
