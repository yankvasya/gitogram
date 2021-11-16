import topMenu from './menu'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

const methods = {
  onChange: action('onChange')
}

export default {
  title: 'topMenu',
  components: { topMenu },
  decorators: [withKnobs]
}

export const defaultViewMenu = () => ({
  components: {
    topMenu
  },
  template: `
   <top-menu
     @change="onChange"
   />
  `,
  methods
})

defaultViewMenu.story = {
  name: 'Стандартный вид'
}
