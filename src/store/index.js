import { createStore } from 'vuex'
import user from './modules/user'
import repositories from './modules/repositories'
import issues from './modules/issues'
import readme from './modules/readme'

export default createStore({
  modules: {
    user,
    repositories,
    issues,
    readme
  }
})
