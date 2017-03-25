import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  list: [{name:'mark', gender:'male', age: '14', hobby: 'running'}]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})