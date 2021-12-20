import { createStore } from 'vuex'
import user from './modules/user'
import repositories from './modules/repositories'
import issues from './modules/issues'
import readme from './modules/readme'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.repositories.data
        ?.filter(repo => !state.user?.data?.starred?.data?.some(star => star.id === repo.id))
    }
  },
  modules: {
    user,
    repositories,
    issues,
    readme
  }
})
