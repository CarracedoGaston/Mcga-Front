export const IS_AUTH = 'mcga/IS_AUTH'

export const isAuth = isAuth => {
  return {
    type: IS_AUTH,
    payload: isAuth
  }
}