const initialState = {
    isLoading: false,
    error: '',
    data: {
        name: 'La china',
        email: 'mejorprofe@gmail.com',
        role: 'teacher'
    }
}


const reducer = (state=initialState, action) => {
    switch(action.type) {
        
        default:
         return state
    }
}

export default reducer