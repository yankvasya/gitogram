import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: false
  },
  getters: {},
  mutations: {
    SET_REPO_DATA (state, payload) {
      state.data = payload
    },
    SET_REPO_LOADING (state, payload) {
      state.loading = payload
    },
    SET_REPO_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchRepositories ({ commit }) {
      commit('SET_REPO_ERROR', '')
      commit('SET_REPO_LOADING', true)
      try {
        const { data } = await api.trandings.getTrendings()

        // for (const el of data.items) {
        //   const i = data.items.indexOf(el)
        //   this.issues[i] = (await api.trandings.getIssues(el.issues_url.split('{/number}').join(''))).data
        // }
        console.log(data.items)

        commit('SET_REPO_DATA', data.items)
      } catch (e) {
        commit('SET_REPO_ERROR', 'Не удалось получить данные пользователя')
      } finally {
        commit('SET_REPO_LOADING', false)
      }
    }
  }
}
