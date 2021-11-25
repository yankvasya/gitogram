import placeholder from './placeholder'

export default {
  title: 'placeholder',
  components: {
    placeholder
  },
  argTypes: {
    amount: {
      control: { type: 'range' }
    }
  }
}

export const defaultViewPlaceholder = (args) => ({
  components: { placeholder },
  data () {
    return {
      args
    }
  },
  template: `
    <div class="w-504">
      <placeholder
        v-bind="args"
      />
    </div>
  `
})

defaultViewPlaceholder.args = {
  amount: 2
}

defaultViewPlaceholder.story = {
  name: 'Стандартный вид'
}
