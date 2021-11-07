import stories from './stories'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number } from '@storybook/addon-knobs'

const methods = {
  onChange: action('onChange')
}

export default {
  title: 'stories',
  components: { stories },
  decorators: [withKnobs]
}

export const defaultViewStories = () => ({
  components: {
    stories
  },
  props: {
    username: {
      default: text('Username', 'Username')
    },
    numStories: {
      default: number('Stories Count', 1)
    }
  },
  template: `
    <stories
      :username="username"
      :num-stories="numStories"
    />
  `,
  methods
})

defaultViewStories.story = {
  name: 'Стандартный вид'
}
