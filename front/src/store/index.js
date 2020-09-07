import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        IdViewType: null,
        userData: {
            userId: null,
            token: null,
            associate: null,
            level: null
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})