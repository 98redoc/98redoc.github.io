import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        user: null
    },
    getters: {
        user: state => state.user,
        jwtToken (state) {
            if (state.user) {
                try {
                    // Credit to: https://stackoverflow.com/a/38552302
                    // Get Token header
                    const base64HeaderUrl = state.user.token.split('.')[0]
                    const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/')
                    const headerData = JSON.parse(window.atob(base64Header))
                    // Get Token payload and date's
                    const base64Url = state.user.token.split('.')[1]
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    const dataJWT = JSON.parse(window.atob(base64))
                    dataJWT.header = headerData
                    // return result
                    return dataJWT
                } catch (err) {
                    return false
                }
            }
            return false
        },
        isAuthenticated (state, getters) {
            if (getters.jwtToken) {
                // Check exp time
                if (Date.now()/1000 < getters.jwtToken.exp) {
                    return true
                } else {
                    return false
                }
            }
            return false
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        },
    },
})