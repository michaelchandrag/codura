import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import session from './session'

export default new Vuex.Store({
  modules: { session },
  plugins: [createPersistedState({key: 'EcliptorisSession'})],
})
