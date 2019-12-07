export const LOAD_QUESTION_BY_ID= 'mcga/LOAD_QUESTION_BY_ID'

export const loadQuestionById = question => {
  return {
    type: LOAD_QUESTION_BY_ID,
    payload: question
  }
}