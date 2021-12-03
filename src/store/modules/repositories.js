import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: false
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find(item => item.id === id)
  },
  mutations: {
    SET_REPO_DATA (state, payload) {
      state.data = payload.map(item => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }

        return item
      })
    },
    SET_REPO_LOADING (state, payload) {
      state.loading = payload
    },
    SET_REPO_ERROR (state, payload) {
      state.error = payload
    },
    SET_FOLLOWING (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
        }

        return repo
      })
    }
  },
  actions: {
    async fetchRepositories ({ commit }) {
      commit('SET_REPO_ERROR', '')
      commit('SET_REPO_LOADING', true)
      try {
        const { data } = await api.trandings.getTrendings()
        commit('SET_REPO_DATA', data.items)
      } catch (e) {
        commit('SET_REPO_ERROR', `Не удалось загрузить данные, ошибка: "${e}"`)
      } finally {
        commit('SET_REPO_LOADING', false)
      }
    },
    async starRepo ({ commit, getters }, id) {
      const { owner, name: repo } = getters.getRepoById(id)
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })

      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true
          }
        })
      } catch (e) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            error: e.message
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },
    async unStarRepo ({ commit, getters }, id) {
      const { owner, name: repo } = getters.getRepoById(id)
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })

      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true
          }
        })
      } catch (e) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            error: e.message
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
