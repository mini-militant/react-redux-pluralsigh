import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './Reducers/Index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
//this middleware warns us if we accidentally mutate any store.

export default function ConfigureStore(initialState){

  //add support for redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
  

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}