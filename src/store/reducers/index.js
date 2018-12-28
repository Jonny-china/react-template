import { combineReducers } from 'redux'

import * as user from './user'
import * as loading from './loading'

// reducer每个模块需要到这来注册
export default combineReducers({
  ...user,
  ...loading
})
