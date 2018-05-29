
import * as types from './actionTypes';


function fetchBreadcrumbSuccess(payload) {
  return {type: types.FETCH_BREADCRUMB, payload: payload};
}

export function fetchBreadcrumb(id) {
  return function(dispatch) {

      console.log('fetching results from server...');

      return fetch(`http://localhost:9000/forum/breadcrumb/${id}`, {
         method: 'GET'
      })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        dispatch(fetchBreadcrumbSuccess(results));
      })
      .catch(console.error);
  }
}