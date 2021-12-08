import issues from './issues'

export default {
  title: 'issues',
  components: { issues },
  argTypes: {
    loadIssues: {
      action: 'button click',
      description: 'if button was clicked'
    },
    frameworkName: { type: 'text' },
    num: { type: 'range' },
    loading: { type: 'boolean' },
    error: { type: 'text' },
    currentInfo: { type: 'object' }
  }
}

export const DefaultViewIssues = (args) => ({
  components: {
    issues
  },
  data () {
    return {
      args
    }
  },
  template: `
    <issues
      v-bind="args"
      @load-issues="args.loadIssues"
    >

    </issues>
  `
})

DefaultViewIssues.story = {
  name: 'Стандартный вид'
}

DefaultViewIssues.args = {
  frameworkName: 'React.js',
  num: 3,
  loading: false,
  error: '',
  currentInfo: [
    {
      title: 'title',
      user: {
        login: 'username'
      },
      length: 3
    },
    {
      title: 'title',
      user: {
        login: 'username'
      },
      length: 3
    }
  ]
}
