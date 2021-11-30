import profile from '../../components/profile/profile'

export default {
  title: 'profile',
  components: {
    profile
  },
  argTypes: {
    clickProfile: {
      action: 'clickProfile',
      description: 'triggered when there was a click on the profile'
    },
    logoutClick: {
      action: 'logoutClick',
      description: 'triggered when exiting a profile'
    },
    homeClick: {
      action: 'homeClick',
      description: 'triggered when the home button is pressed'
    }
  }
}

export const defaultViewProfile = (args) => ({
  components: { profile },
  data () {
    return {
      args
    }
  },
  template: `
    <profile
      @homeClick="args.homeClick"
      @logoutClick="args.logoutClick"
      @profileClick="args.clickProfile"
    />
  `
})

defaultViewProfile.args = {
  titleStory: 'React.reposit',
  defaultText: 'Follow',
  hoverText: 'Unfollow',
  loadingSpinner: false,
  activeStory: false,
  avatarSrc: 'https://cdn.pixabay.com/photo/2021/01/24/19/05/crane-5946169_960_720.jpg'
}

defaultViewProfile.story = {
  name: 'Стандартный вид'
}
