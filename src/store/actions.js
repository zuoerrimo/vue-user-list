import * as types from './mutation-types'

export default {
  saveUser({ commit }, user) {
    commit(types.SAVE_USER, user);
  },
  deleteUser({ commit }, index) {
    commit(types.DELETE_USER, index)
  }
};