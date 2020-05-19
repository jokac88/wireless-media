import Vue from "vue";
import Vuex from "vuex";
import DataService from "@/services/DataService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: ["ivan"],
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
  actions: {
    fetchData({ commit }) {
      DataService.getData()
        .then((response) => {
          commit("SET_DATA", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
