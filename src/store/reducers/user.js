import { USER_INFO } from '@/store/constants'

export function userInfo(state = { id: 69 }, action) {
  switch (action.type) {
    case USER_INFO:
      return action.userInfo || {}
    default:
      return state
  }
}
