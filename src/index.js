import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import 'firebase/firestore';
import firebase from './config/fbConfig';
import rootReducer from './store/reducers/rootReducer';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';

const rrfConfig = { 
  userProfile: 'users',
  useFirestoreForProfile: true
}

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase)
  )
);

const rffProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
          <App />  
      </ReactReduxFirebaseProvider>
  </Provider>, 
  document.getElementById('root')
);