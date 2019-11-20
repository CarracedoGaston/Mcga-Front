export const ADD_USER = 'mcga/ADD_USER'

export const addUsers = () => {
  return {
    type: ADD_USER,
    payload: {
      id: Date.now(), 
      user: 1,  
      gameType: 1, 
      name: document.getElementById('questionToMake').value,
      firstAnswer: document.getElementById('questionFirstAnswer').value,
      secondAnswer: document.getElementById('questionSecondtAnswer').value,
      thirdAnswer: document.getElementById('questionThirdAnswer').value,
      firstQuantity: 0,
      secondQuantity: 0,
      thirdQuantity: 0
    }
  }
}