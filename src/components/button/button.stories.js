import xButton from './button'
import { withKnobs, text } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
//
// const methods = {
//   onChange: action('onChange')
// }

export default {
  title: 'button',
  components: {
    xButton
  },
  decorators: [withKnobs],
  argTypes: {
    control: { type: 'text' }
  }
}

export const defaultViewButton = (args) => ({
  components: { xButton },
  data () {
    return {
      args
    }
  },
  props: {
    defaultText: {
      default: text('Default text', 'Follow')
    },
    hoverText: {
      default: text('Hover text', 'Unfollow')
    }
  },
  template: `
    <x-button
      v-bind="args"
    />
  `
})

defaultViewButton.args = {
  defaultText: 'Follow',
  hoverText: 'Unfollow'
}

defaultViewButton.story = {
  name: 'Стандартный вид'
}
