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
      default: text('Framework', 'React.js')
    },
    span: {
      default: text('First Word', 'JavaScript')
    },
    description: {
      default: text('Description', 'framework for building interactive web applications ⚡')
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
      :span="span"
      @change="onChange"
    />
  `,
  methods
})

defaultViewFramework.story = {
  name: 'Стандартный вид'
}
