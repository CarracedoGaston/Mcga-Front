export const ADD_QUESTION = 'mcga/ADD_QUESTION'
export const LOAD_QUESTIONS = 'mcga/LOAD_QUESTIONS'

export const addQuestions = () => {
  return {
    type: ADD_QUESTION,
    payload: {
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

export const loadQuestions = questions => {
  return {
    type: LOAD_QUESTIONS,
    payload: questions
  }
}