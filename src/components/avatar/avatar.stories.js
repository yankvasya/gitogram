import avatar from './avatar'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

// const methods = {
//   onChange: action('onChange')
// }

export default {
  title: 'avatar',
  components: { avatar },
  decorators: [withKnobs],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
}

export const defaultViewAvatar = () => ({
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
      :title="title"
      src="https://cdn.pixabay.com/photo/2021/01/24/19/05/crane-5946169_960_720.jpg"
      alt="image"
    />
  `
  // methods
})

export const activeViewAvatar = () => ({
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
      :title="title"
      src="https://cdn.pixabay.com/photo/2021/01/24/19/05/crane-5946169_960_720.jpg"
      alt="image"
      active
    />
  `
  // methods
})

defaultViewAvatar.story = {
  name: 'Стандартный вид'
}

activeViewAvatar.story = {
  name: 'Подсветка'
}
