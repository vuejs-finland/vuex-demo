import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    actions: {
        add({ commit }, amount) {
            // usually, we call API and wait for response here
            // because actions can be async
            commit('increment', amount);
        },
    },
    mutations: {
        increment(state, amount) {
            state.counter += amount;
        },
    },
});
