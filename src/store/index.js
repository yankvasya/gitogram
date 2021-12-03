import { createStore } from 'vuex'
import user from './modules/user'
import repositories from './modules/repositories'
import issues from './modules/issues'
import readme from './modules/readme'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      // return state.repositories.data.filter(repo => !state.starred.data.some(star => star.id === repo.id))
      // return state.repositories.data.filter(repo => state.repositories.following)
    }
  },
  modules: {
    user,
    repositories,
    issues,
    readme
  }
})
