import xButton from './button'

export default {
  title: 'button',
  components: {
    xButton
  },
  argTypes: {
    buttonClick: {
      action: 'button click',
      description: 'if button was clicked'
    },
    control: { type: 'text' },
    loading: { type: 'boolean' }
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
      @onClick="args.buttonClick"
    />
  `
})

defaultViewButton.args = {
  defaultText: 'Follow',
  hoverText: 'Unfollow',
  loading: true
}

defaultViewButton.story = {
  name: 'Стандартный вид'
}
