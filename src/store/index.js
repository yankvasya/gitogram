import { createStore } from 'vuex'
import user from './modules/user'
import repositories from './modules/repositories'

export default createStore({
  modules: {
    user,
    repositories
  }
})
