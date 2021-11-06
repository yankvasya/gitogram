import framework from './framework'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

const methods = {
  onChange: action('onChange')
}

export default {
  title: 'framework',
  components: { framework },
  decorators: [withKnobs]
}

export const defaultViewFramework = () => ({
  components: {
    framework
  },
  props: {
    title: {
      default: text('Framework Name', 'React.js')
    },
    description: {
      default: text('Description', '<span>JavaScript</span> framework for building interactive web applications ⚡')
    },
    stars: {
      default: text('Stars', '300')
    },
    forks: {
      default: text('Forks', '10')
    }
  },
  template: `
    <framework
      :title="title"
      :desc="description"
      :stars="stars"
      :forks="forks"
      @change="onChange"
    />
  `,
  methods
})

defaultViewFramework.story = {
  name: 'Стандартный вид'
}
