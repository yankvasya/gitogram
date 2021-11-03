import avatar from './avatar'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

const methods = {
  onChange: action('onChange')
}

export default {
  title: 'avatar',
  components: { avatar },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    avatar
  },
  props: {
    title: {
      default: text('Username', 'Default Name')
    }
  },
  template: `
    <avatar
      @change="onChange"
      :title="title"
      src="https://cdn.pixabay.com/photo/2021/01/24/19/05/crane-5946169_960_720.jpg"
      alt="image"
    />
  `,
  methods
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const activeView = () => ({
  components: {
    avatar
  },
  template: `
    <avatar
      title="User Name"
      src="https://cdn.pixabay.com/photo/2021/01/24/19/05/crane-5946169_960_720.jpg"
      alt="image"
      active
    />
  `
})

activeView.story = {
  name: 'Подсветка'
}
