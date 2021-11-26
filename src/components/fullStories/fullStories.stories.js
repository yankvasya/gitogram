import fullStories from './fullStories'
import { texts } from '../../components/globalProperties'

export default {
  title: 'fullStories',
  components: {
    fullStories
  },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    },
    texts: {
      control: { type: 'text' }
    },
    titleStory: {
      control: { type: 'text' }
    },
    defaultText: {
      control: { type: 'text' }
    },
    hoverText: {
      control: { type: 'text' }
    },
    activeStory: {
      control: { type: 'boolean' }
    },
    loadingSpinner: {
      control: { type: 'boolean' }
    },
    avatarSrc: {
      control: { type: 'text' }
    }
  }
}

export const defaultViewFullStories = (args) => ({
  components: { fullStories },
  data () {
    return {
      args
    }
  },
  template: `
    <ul class="d-flex justify-center">
      <full-stories
        v-bind="args"
        @onFinish="args.onFinish"
      />
    </ul>
  `
})

defaultViewFullStories.args = {
  titleStory: 'React.reposit',
  defaultText: 'Follow',
  hoverText: 'Unfollow',
  loadingSpinner: false,
  activeStory: true,
  avatarSrc: 'https://cdn.pixabay.com/photo/2021/01/24/19/05/crane-5946169_960_720.jpg',
  texts: texts
}

defaultViewFullStories.story = {
  name: 'Стандартный вид'
}
