
export const SAVE_USER = 'SAVE_USER';
export const DELETE_USER = 'DELETE_USER';
// src/store/mutations.js
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