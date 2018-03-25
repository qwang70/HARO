import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
 
function tempReducer(state={}, action) {
  return state
}
 
export default function configureStore(preloadedState) {
  return createStore(
    tempReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}