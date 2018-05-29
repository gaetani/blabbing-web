import * as types from '../actions/thread/actionTypes';

export default function threadReducer(state = {}, action) {
  switch(action.type) {
    case types.FETCH_THREAD:
      return action.payload
    default: 
      return state
  }
}