import * as types from '../actions/topic/actionTypes';

export default function topicReducer(state = {}, action) {
  switch(action.type) {
    case types.FETCH_TOPIC:
      return {...state, topics:action.payload};
    default: 
      return state
  }
}