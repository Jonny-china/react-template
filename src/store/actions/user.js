import { USER_INFO } from '@/store/constants'
import { sleep } from '@/utils'

// export const getUserInfo = data => {
//   return { type: USER_INFO, userInfo: data }
// }
export const getUserInfo = data => async dispatch => {
  await sleep(1500)
  dispatch({ type: USER_INFO, userInfo: data })
  return data
}
