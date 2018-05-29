
import * as types from './actionTypes';



function fetchTopicSuccess(payload) {
  return {type: types.FETCH_TOPIC, payload: payload};
}

export function fetchTopic(filter) {
  return function(dispatch) {
    //dispatch(fetchTopicSuccess(topicM));

      console.log('fetching results from server...');
     // const esc = encodeURIComponent;
      /*
      const query = Object.keys(filter)
      .map(k => `${esc(k)}=${esc(filter[k])}`)
      .join('&');*/

      return fetch(`http://localhost:9000/forum`, {
         method: 'GET',
      })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        dispatch(fetchTopicSuccess(results));
      })
      .catch(console.error);
  }
}