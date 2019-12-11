export const LOAD_QUESTIONS= 'mcga/LOAD_QUESTIONS'
export const LOAD_QUESTION_BY_ID= 'mcga/LOAD_QUESTION_BY_ID'
export const DELETE_QUESTION= 'mcga/DELETE_QUESTION'
export const UPDATE_QUESTION= 'mcga/UPDATE_QUESTION'

export const loadQuestions = questions => {
  return {
    type: LOAD_QUESTIONS,
    payload: questions
  }
}

export const loadQuestionById = question => {
  return {
    type: LOAD_QUESTION_BY_ID,
    payload: question
  }
}

export const deleteQuestion = questionId => {
  return {
    type: DELETE_QUESTION,
    payload: questionId
  }
}

export const updateQuestion = question => {
  return {
    type: UPDATE_QUESTION,
    payload: question
  }
}