import storiesContainer from './storiesContainer'

export default {
  title: 'storiesContainer',
  components: {
    storiesContainer
  },
  argTypes: {
    amountPlaceholders: { type: 'range' }
  }
}

export const defaultViewStoriesContainer = (args) => ({
  components: { storiesContainer },
  data () {
    return {
      args
    }
  },
  template: `
    <stories-container
      v-bind="args"
    />
  `
})

defaultViewStoriesContainer.args = {
  amountPlaceholders: 1
}

defaultViewStoriesContainer.story = {
  name: 'Стандартный вид'
}
