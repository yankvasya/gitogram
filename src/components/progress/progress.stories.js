import progress from './progress'

export default {
  title: 'progress',
  components: {
    progress
  },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    }
  }
}

export const defaultViewProgress = (args) => ({
  components: { progressLine: progress },
  data () {
    return {
      args
    }
  },
  template: `
    <progress-line @onFinish="args.onFinish" />
  `
})

defaultViewProgress.story = {
  name: 'Стандартный вид'
}
