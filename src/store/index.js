import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';

export default function configureStore() {
  //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    rootReducer,
    
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

//  syncTranslationWithStore(store)
 // store.dispatch(loadTranslations(translationObject));
 // store.dispatch(setLocale('en'));

  return store;
}