import avatar from './avatar'

export default {
  title: 'avatar',
  components: { avatar }
}

export const defaultView = () => ({
  components: {
    avatar
  },
  template: `
    <avatar
      title="User Name"
      src="https://cdn.pixabay.com/photo/2021/01/24/19/05/crane-5946169_960_720.jpg"
      alt="image"
    />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const activeView = () => ({
  components: {
    avatar
  },
  template: `
    <avatar
      title="User Name"
      src="https://cdn.pixabay.com/photo/2021/01/24/19/05/crane-5946169_960_720.jpg"
      alt="image"
      active
    />
  `
})

activeView.story = {
  name: 'Подсветка'
}
