
import * as types from './actionTypes';


function fetchMessageSuccess(payload) {
  return {type: types.FETCH_MESSAGE, payload: payload};
}

export function fetchMessages(filter) {
  return function(dispatch) {

      console.log('fetching results from server...');
      //const esc = encodeURIComponent;
      
      /*const query = Object.keys(filter)
      .map(k => `${esc(k)}=${esc(filter[k])}`)
      .join('&'); */

      return fetch(`http://localhost:9000/forum/${filter.threadId}/messages?page=${filter.page}`, {
         method: 'GET',
         body: filter
      })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        dispatch(fetchMessageSuccess(results));
      })
      .catch(console.error);
  }
}