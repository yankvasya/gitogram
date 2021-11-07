import framework from './framework'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number } from '@storybook/addon-knobs'

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
    frameworkName: {
      default: text('Framework', 'React.js', 'Framework')
    },
    frameworkSpan: {
      default: text('First Word', 'JavaScript', 'Framework')
    },
    frameworkDesc: {
      default: text('Description',
        'framework for building interactive web applications ⚡',
        'Framework')
    },
    stars: {
      default: number('Stars', 300, 'Framework')
    },
    forks: {
      default: number('Forks', 10, 'Framework')
    }
  },
  template: `
    <framework
      :title="frameworkName"
      :desc="frameworkDesc"
      :stars="stars"
      :forks="forks"
      :span="frameworkSpan"
      @change="onChange"
    />
  `,
  methods
})

defaultViewFramework.story = {
  name: 'Стандартный вид'
}
