export const CurrentUserModule = {
    namespaced: true,
    strict: true,
    state: {
      user: null,
      token: null
    },

    getters: {
      user: state => state.user,
      token: state  => state.token
    },
    mutations: {
      setUser(state, user) {
        state.user = user
        if (!user) {
          localStorage.removeItem('user')
        } else {
          localStorage.setItem('user', JSON.stringify(user))   // Json.parse reverso.
        }
      },
      setToken(state, token) {
        state.token = token
        if (!token) {
          localStorage.removeItem('token')
        } else {
          localStorage.setItem('token', token)
        }
      }
    },
    actions: {
      setUser ({ commit }, user) {
          commit('setUser', user)
      },
      setToken ({ commit }, token) {
        commit('setToken', token)
      },
    },
}
