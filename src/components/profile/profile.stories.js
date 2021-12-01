import profile from '../../components/profile/profile'

export default {
  title: 'profile',
  components: {
    profile
  },
  argTypes: {
    profileImg: { type: 'text' },
    clickProfile: {
      action: 'clickProfile',
      description: 'triggered when there was a click on the profile'
    },
    logoutClick: {
      action: 'logoutClick',
      desc: 'triggered when exiting a profile'
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
      v-bind="args"
      @homeClick="args.homeClick"
      @logoutClick="args.logoutClick"
      @profileClick="args.clickProfile"
    />
  `
})

defaultViewProfile.args = {
  profileImg: 'https://cdn-icons-png.flaticon.com/512/64/64572.png'
}

defaultViewProfile.story = {
  name: 'Стандартный вид'
}
