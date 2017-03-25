import * as types from './mutation-types'

export default {
  [types.SAVE_USER] (state, user) {
    state.list.push(
      user
    )
  },
  [types.DELETE_USER] (state, idx) {
    state.list.splice(idx, 1);
  }
};