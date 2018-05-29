import * as types from '../actions/breadcrumb/actionTypes';

export default function breadcrumbReducer(state = {}, action) {
  switch(action.type) {
    case types.FETCH_BREADCRUMB:
      return action.payload;
    default: 
      return state
  }
}