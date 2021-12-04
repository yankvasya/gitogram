import placeholder from './placeholder'

export default {
  title: 'placeholder',
  components: {
    placeholder
  },
  argTypes: {
    amount: {
      control: { type: 'range', min: 1, max: 10 }
    },
    rows: {
      control: { type: 'range', min: 0, max: 3 }
    }
  }
}

export const DefaultViewPlaceholder = (args) => ({
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

DefaultViewPlaceholder.args = {
  amount: 2,
  rows: 3
}

DefaultViewPlaceholder.story = {
  name: 'Стандартный вид'
}
