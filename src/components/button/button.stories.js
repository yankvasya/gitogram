import xButton from './button'

export default {
  title: 'xButton',
  components: {
    xButton
  },
  argTypes: {
    buttonClick: {
      action: 'button click',
      description: 'if button was clicked'
    },
    control: { type: 'text' },
    loading: { type: 'boolean' },
    disabled: { type: 'boolean' }
  }
}

export const DefaultViewButton = (args) => ({
  components: { xButton },
  data () {
    return {
      args
    }
  },
  template: `
    <x-button
      v-bind="args"
      @click="args.buttonClick"
    />
  `
})

DefaultViewButton.args = {
  defaultText: 'Follow',
  hoverText: 'Unfollow',
  loading: false,
  disabled: false
}

DefaultViewButton.story = {
  name: 'Стандартный вид'
}
