export const ADD_QUESTION = 'mcga/ADD_QUESTION'

export const addQuestions = () => {
  return {
    type: ADD_QUESTION,
    payload: {
      id: Date.now(), 
      user: 1,  
      gameType: 1, 
      title: document.getElementById('questionToMake').value,
      firstAnswer: 'questionFirstAnswer',
      secondAnswer: 'ans2',
      thirdAnswer: 'ans3',
      firstQuantity: 0,
      secondQuantity: 0,
      thirdQuantity: 0
    }
  }
}