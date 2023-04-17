export const state = () => ({
    user: null
  })
  
  export const mutations = {
    SET_USER(state, user) {
      state.user = user
    }
  }
  
  export const actions = {
    login({ commit }, user) {
      // perform authentication
      // ...
      
      // save user to localStorage
      localStorage.setItem('user', JSON.stringify(user))
      
      // commit the user to Vuex store
      commit('SET_USER', user)
    },
    
    logout({ commit }) {
      // clear user from localStorage
      localStorage.removeItem('user')
      
      // clear user from Vuex store
      commit('SET_USER', null)
    }
  }