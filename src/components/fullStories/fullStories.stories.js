import fullStories from './fullStories'

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
    boldText: {
      control: { type: 'text' }
    },
    texts: {
      control: { type: 'array' }
    },
    titleStory: {
      control: { type: 'text' }
    },
    defaultText: {
      control: { type: 'text' }
    },
    hoverText: {
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
    <full-stories
      v-bind="args"
      @onFinish="args.onFinish"
    />
  `
})

defaultViewFullStories.args = {
  boldText: 'The easiest',
  titleStory: 'React.reposit',
  defaultText: 'Follow',
  hoverText: 'Unfollow',
  texts: ['way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.',
    'For running on Mac you\'ll currently use your favorite text editor and terminal to edit and run apps.' +
    ' We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.',
    'In Preview 4 we enable push/pop navigation with NavigationPage.' +
  ' We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms',
    'For running on Mac you\'ll currently use your favorite text editor and terminal to edit and run apps.' +
    ' We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.',
    'way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.',
    'For running on Mac you\'ll currently use your favorite text editor and terminal to edit and run apps.' +
    ' We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.',
    'In Preview 4 we enable push/pop navigation with NavigationPage.' +
    ' We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms',
    'For running on Mac you\'ll currently use your favorite text editor and terminal to edit and run apps.' +
    ' We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.',
    'way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.',
    'For running on Mac you\'ll currently use your favorite text editor and terminal to edit and run apps.' +
    ' We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.',
    'In Preview 4 we enable push/pop navigation with NavigationPage.' +
    ' We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms',
    'For running on Mac you\'ll currently use your favorite text editor and terminal to edit and run apps.' +
    ' We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.'
  ]
}

defaultViewFullStories.story = {
  name: 'Стандартный вид'
}
