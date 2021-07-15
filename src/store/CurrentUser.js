export const CurrentUserModule = {
  namespaced: true,
  strict: true,
  state: {
    token: "",
    user: {},
    admin: false,
    userLoggedIn: false,
  },
  getters: {
    user: state => state.user,
    token: state => state.token
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      if (token !== "") {
        state.userLoggedIn = true
        localStorage.setItem('token', token)
      } else {
        state.userLoggedIn = false
        localStorage.removeItem('token')
      }
    },

    SET_USER(state, user) {
      state.user = user
      if (Object.keys(user).length !== 0) {
        localStorage.setItem('user', JSON.stringify(user))
        if (user.role == "admin") {
          state.admin = true
        } else {
          state.admin = false
        }
      } else {
        state.admin = false
        localStorage.removeItem('user')
      }
    },
    SET_NAME(state, {
      name
    }) {
      state.user.name = name
    },
  },
  actions: {
    setToken({
      commit
    }, token) {
      commit("SET_TOKEN", token)
    },
    setUser({
      commit
    }, user) {
      commit("SET_USER", user)
    },
    setName({
      commit
    }, {
      name
    }) {
      commit("SET_NAME", {
        name
      })
    },
  }
  // state: {
  //   user: {},
  //   token: ""
  // },

  // getters: {
  //   user: state => state.user,
  //   token: state => state.token
  // },
  // mutations: {
  //   setUser(state, user) {
  //     state.user = user
  //     if (!user) {
  //       localStorage.removeItem('user')
  //     } else {
  //       localStorage.setItem('user', JSON.stringify(user)) // Json.parse reverso.
  //     }
  //   },
  //   setToken(state, token) {
  //     state.token = token
  //     if (!token) {
  //       localStorage.removeItem('token')
  //     } else {
  //       localStorage.setItem('token', token)
  //     }
  //   }
  // },
  // actions: {
  //   setUser({
  //     commit
  //   }, user) {
  //     commit('setUser', user)
  //   },
  //   setToken({
  //     commit
  //   }, token) {
  //     commit('setToken', token)
  //   },
  // },
}