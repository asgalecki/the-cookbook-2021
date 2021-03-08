import authReducer from './authReducer';
import recipeReducer from './recipeReducer';
import viewCounterReducer from './viewCounterReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
  counter: viewCounterReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;