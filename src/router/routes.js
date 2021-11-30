import Home from '../pages/home/Home'
import Stories from '../pages/storiesPage/Stories'
import notFound from '../pages/notFound/notFound'
import Auth from '../pages/auth/Auth'
export default [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/stories/:id(\\d+)', // принимает только числа под id (регулярка)
    component: Stories,
    name: 'stories',
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFound
  },
  {
    path: '/auth',
    component: Auth
  }
]
