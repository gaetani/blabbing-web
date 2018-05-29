import React from 'react';
import ReactDOM from 'react-dom';
import { Router  } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import history  from './history';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
