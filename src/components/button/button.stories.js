import xButton from './button'

export default {
  title: 'button',
  components: {
    xButton
  },
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
