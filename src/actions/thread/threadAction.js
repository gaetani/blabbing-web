
import * as types from './actionTypes';


function fetchThreadSuccess(payload) {
  return {type: types.FETCH_THREAD, payload: payload};
}

export function fetchThread(filter) {
  return function(dispatch) {

      console.log('fetching results from server...');
      //const esc = encodeURIComponent;
      
      /*const query = Object.keys(filter)
      .map(k => `${esc(k)}=${esc(filter[k])}`)
      .join('&'); */

      return fetch(`http://localhost:9000/forum/${filter.threadId}?page=${filter.page}`, {
         method: 'GET',
         body: filter
      })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        dispatch(fetchThreadSuccess(results));
      })
      .catch(console.error);
  }
}