import stories from './stories'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

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
      default: text('Username', 'test-name')
    },
    storiesImgSrc: {
      default: text('Image Src', 'https://avatars.githubusercontent.com/u/66585732?v=4')
    }
  },
  template: `
    <div class="d-flex justify-center">
      <ul class="x-container stories d-flex">
        <stories
          v-for="n in 10"
          :key="n"
          :username="username"
          :stories-img="storiesImgSrc"
        />
      </ul>
    </div>
  `,
  methods
})

defaultViewStories.story = {
  name: 'Стандартный вид'
}
