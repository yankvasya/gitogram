// import storiesContainer from './storiesContainer'
// import { texts } from '../../components/globalProperties'
//
// export default {
//   title: 'storiesContainer',
//   components: {
//     storiesContainer
//   },
//   argTypes: {
//     texts: {
//       control: { type: 'text' }
//     },
//     titleStory: {
//       control: { type: 'text' }
//     },
//     defaultText: {
//       control: { type: 'text' }
//     },
//     hoverText: {
//       control: { type: 'text' }
//     },
//     activeStory: {
//       control: { type: 'boolean' }
//     },
//     loadingSpinner: {
//       control: { type: 'boolean' }
//     },
//     avatarSrc: {
//       control: { type: 'text' }
//     }
//   }
// }
//
// export const defaultViewStoriesContainer = (args) => ({
//   components: { storiesContainer },
//   data () {
//     return {
//       args
//     }
//   },
//   template: `
//     <stories-container
//       v-bind="args"
//     />
//   `
// })
//
// defaultViewStoriesContainer.args = {
//   titleStory: 'React.reposit',
//   defaultText: 'Follow',
//   hoverText: 'Unfollow',
//   loadingSpinner: false,
//   activeStory: false,
//   avatarSrc: 'https://cdn.pixabay.com/photo/2021/01/24/19/05/crane-5946169_960_720.jpg',
//   texts: texts
// }
//
// defaultViewStoriesContainer.story = {
//   name: 'Стандартный вид'
// }
