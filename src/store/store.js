import Vue from "vue";
import Vuex from "vuex";
import DataService from "@/services/DataService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    headingMaxHeight: 0,
    netMaxHeight: 0,
    tvMaxHeight: 0,
  },
  mutations: {
    // Mutation for set state
    SET_DATA(state, data) {
      state.data = data;
    },
    // Mutation for preselected contract
    SET_PRESELECTED_CONTRACT(state, contract) {
      state.data.contract_length.preselected_contract_length = contract;
    },
    SET_MAX_HEIGHT(state, payload) {
      state[payload.section] =
        state[payload.section] > payload.height
          ? state[payload.section]
          : payload.height;
    },
  },
  actions: {
    // Action for api call
    fetchData({ commit }) {
      DataService.getData()
        .then((response) => {
          if (response.data !== null && typeof response.data !== "undefined") {
            commit("SET_DATA", response.data);
          }
        })
        .catch((error) => console.log(error));
    },
    // Action for preselected contract
    preselectedContract({ commit }, contract) {
      commit("SET_PRESELECTED_CONTRACT", contract);
    },
    maxHeight({ commit }, payload) {
      console.log(payload);
      commit("SET_MAX_HEIGHT", payload);
    },
  },
  getters: {
    getMaxHeight: (state) => {
      return state.netMaxHeight;
    },
  },
  modules: {},
});
