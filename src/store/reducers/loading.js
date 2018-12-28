import { SHOW_LOADING } from '@/store/constants'

export function showLoading(state = false, action) {
  switch (action.type) {
  case SHOW_LOADING:
    return action.showLoading
  default:
    return state
  }
}
