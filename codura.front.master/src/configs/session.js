const EXPIRATION_TIME = 24 * 60 * 60 * 1000 // 24 jam dalam milidetik

const state = { auth: null, data: {} }

const getters = {
  authenticated: (state) => !!state.auth,
  stateAuth: (state) => state.auth,
  stateData: (state) => state.data
}

const actions = {
  async login({ commit }, auth) {
    const expiresAt = new Date().getTime() + EXPIRATION_TIME
    await commit('setAuth', { ...auth, expiresAt })
  },
  async logout({ commit }) {
    commit('destroyAuth')
  },
  async setSession({ commit }, data) {
    await commit('addSession', data)
  },
  async delSession({ commit }, key) {
    commit('removeSession', key)
  },
  async clearSession({ commit }) {
    commit('destroySession')
  },
  checkAuthExpiration({ commit, state }) {
    const now = new Date().getTime()
    if (state.auth && state.auth.expiresAt && now > state.auth.expiresAt) {
      commit('destroySession')
      commit('destroyAuth')
    }
  }
}

const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
  destroyAuth(state) {
    state.auth = null
  },
  addSession(state, data) {
    state.data[`${data.key}`] = data.value
  },
  removeSession(state, key) {
    delete state.data[`${key}`]
  },
  destroySession(state) {
    state.data = {}
  }
}

export default { state, getters, actions, mutations }
