import posts from './posts'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'
import { allMonths, optionsIssues, optionsMonth } from '../globalProperties'

const methods = {
  onChange: action('onChange')
}

export default {
  title: 'post',
  components: { posts },
  decorators: [withKnobs]
}

export const defaultViewPosts = () => ({
  components: {
    posts
  },
  props: {
    username: {
      default: text('Username', 'Username', 'Top line')
    },
    postImg: {
      default: text('Image №', 'https://avatars.githubusercontent.com/u/10028428?v=4', 'Top line')
    },
    frameworkName: {
      default: text('Framework', 'React.js', 'Framework')
    },
    frameworkSpan: {
      default: text('First Word', 'JavaScript', 'Framework')
    },
    frameworkDesc: {
      default: text('Description', 'framework for building interactive web applications ⚡', 'Framework')
    },
    stars: {
      default: number('Stars', 300, {}, 'Framework')
    },
    forks: {
      default: number('Forks', 10, {}, 'Framework')
    },
    months: {
      default: select('Month', allMonths, 'Jan', 'Date')
    },
    countMonth: {
      default: number('Day', 1, optionsMonth, 'Date')
    },
    issuesNum: {
      default: number('Issues Count', 3, optionsIssues, 'Issues')
    },
    issue: {
      default: text('Issue', 'transition-group with flex parent causes removed items to fly', 'Issues')
    }
  },
  template: `
    <ul>
      <posts
        :username="username"
        :framework-name="frameworkName"
        :framework-span="frameworkSpan"
        :framework-desc="frameworkDesc"
        :post-img="postImg"
        :stars="stars"
        :forks="forks"
        :issues-num="issuesNum"
        :issue="issue"
        :month="months"
        :num-month="countMonth"
        @change="onChange"
      />
    </ul>
  `,
  methods
})

defaultViewPosts.story = {
  name: 'Стандартный вид'
}
