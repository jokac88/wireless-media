import Vue from "vue";
import Vuex from "vuex";
import DataService from "@/services/DataService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_PRESELECTED_CONTRACT(state, contract) {
      state.data.contract_length.preselected_contract_length = contract;
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
    preselectedContract({ commit }, contract) {
      commit("SET_PRESELECTED_CONTRACT", contract);
    },
  },
  getters: {},
  modules: {},
});
