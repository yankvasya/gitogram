export default {
  namespaced: true,
  state: {
    foo: 'bar',
    users: [
      { id: 1, name: 'Dasha', status: 'senior' },
      { id: 2, name: 'Moroshka', status: 'senior' },
      { id: 3, name: 'Petr', status: 'junior' },
      { id: 4, name: 'Stas', status: 'junior' },
      { id: 5, name: 'John', status: 'junior' },
      { id: 6, name: 'Vasya', status: 'middle' }
    ],
    user: {
      data: null,
      loading: false,
      error: ''
    }
  },
  getters: {
    getMiddlePlus: (state) => (id) => {
      return state.users.filter(user => user.id === id)
    },
    getIfUserIfFemale (state) {
      return state.user.data?.gender === 'female'
    }
  },
  mutations: {
    UPDATE_FOO (state, payload) {
      payload !== state.foo ? state.foo = payload : state.foo = 'bar'
    },
    SET_USER_DATA (state, payload) {
      state.user.data = payload
    },
    SET_USER_LOADING (state, payload) {
      state.user.loading = payload
    },
    SET_USER_ERROR (state, payload) {
      state.user.error = payload
    }
  },
  actions: {
    fetchMethod (store, payload) {
      console.log(payload)
    },
    async fetchUser ({ commit }) {
      commit('SET_USER_ERROR', '')
      commit('SET_USER_LOADING', true)
      try {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        commit('SET_USER_DATA', data.results[0])
      } catch (e) {
        commit('SET_USER_ERROR', 'Не удалось получить данные пользователя')
        console.log(e)
      } finally {
        commit('SET_USER_LOADING', false)
      }
    }
  }
}
