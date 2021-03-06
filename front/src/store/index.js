import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    IdViewType: null,
    userData: {
      name: null,
      userId: null,
      email: null,
      association: null,
      role: null,
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
