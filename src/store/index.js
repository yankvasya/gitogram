import { createStore } from 'vuex'
import user from './modules/user'
import repositories from './modules/repositories'
import issues from './modules/issues'

export default createStore({
  modules: {
    user,
    repositories,
    issues
  }
})
