import issue from './issue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

const methods = {
  onChange: action('onChange')
}

export default {
  title: 'issue',
  components: { issue },
  decorators: [withKnobs]
}

export const defaultViewIssue = () => ({
  components: {
    issue
  },
  props: {
    username: {
      default: text('Username', 'username')
    },
    issue: {
      default: text('Issue', 'transition-group with flex parent causes removed items to fly')
    }
  },
  template: `
   <ul>
     <issue
       @change="onChange"
       :username="username"
       :issue="issue"
     />
   </ul>
  `,
  methods
})

defaultViewIssue.story = {
  name: 'Стандартный вид'
}
