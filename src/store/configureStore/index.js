import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '@/store/reducers'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
  window.store = store
  return store
}
