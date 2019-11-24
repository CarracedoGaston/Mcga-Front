export const LOAD_QUESTIONS = 'mcga/LOAD_QUESTIONS'

export const loadQuestions = questions => {
  return {
    type: LOAD_QUESTIONS,
    payload: questions
  }
}