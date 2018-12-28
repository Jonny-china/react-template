import { USER_INFO } from '@/store/constants'

export const getUserInfo = code => async dispatch => {
  try {
    const { data = {} } = { data: { id: 999 } }
    dispatch({ type: USER_INFO, userInfo: data })
    return data
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}
