export const ADD_USER = 'mcga/ADD_USER'

export const addUsers = () => {
  return {
    type: ADD_USER,
    payload: {
      id: Date.now(), 
      name: document.getElementById('inputName').value,
      email: document.getElementById('inputCreateAccount').value,
      password: document.getElementById('inputPassword').value
    }
  }
}