import * as types from '../actions/message/actionTypes';

export default function messageReducer(state = {}, action) {
  switch(action.type) {
    case types.FETCH_MESSAGE:
      return action.payload
    default: 
      return state
  }
}