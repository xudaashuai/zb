import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';
import zb from './modules/zb'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {},
  modules: {
    app,
    user,
    zb
  }
});

export default store;
