import xButton from './button'
import { withKnobs, text } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
//
// const methods = {
//   onChange: action('onChange')
// }

export default {
  title: 'x-button',
  components: {
    xButton
  },
  decorators: [withKnobs]
}

export const defaultViewButton = () => ({
  components: { xButton },
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
      :default-text="defaultText"
      :hover-text="hoverText"
    />
  `
})

defaultViewButton.story = {
  name: 'Стандартный вид'
}
