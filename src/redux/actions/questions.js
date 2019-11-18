export const ADD_QUESTION = 'mcga/ADD_QUESTION'
export const ADD_FIRST_QUANTITY = 'mcga/ADD_FIRST_QUANTITY'

export const addQuestions = () => {
  return {
    type: ADD_QUESTION,
    payload: {
      id: Date.now(), 
      user: 1,  
      gameType: 1, 
      title: document.getElementById('questionToMake').value,
      firstAnswer: document.getElementById('questionFirstAnswer').value,
      secondAnswer: document.getElementById('questionSecondtAnswer').value,
      thirdAnswer: document.getElementById('questionThirdAnswer').value,
      firstQuantity: 0,
      secondQuantity: 0,
      thirdQuantity: 0
    }
  }
}