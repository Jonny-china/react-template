import { SHOW_LOADING } from '../constants'

export const setShowLoading = (bool = false) => {
  return { type: SHOW_LOADING, showLoading: bool }
}
