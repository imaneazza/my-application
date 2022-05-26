import Vuex from 'vuex'
import Vue from 'vue'
import {state} from './state'
import {mutations} from './mutations'
import {actions} from './actions'
import {getter} from './getter'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getter

})
