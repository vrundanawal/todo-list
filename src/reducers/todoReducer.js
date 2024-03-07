const initialState = {
    tasks: [],
    userInput: ""
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return{
                ...state, 
                tasks: [...state.tasks, {id: state.tasks.length + 1, text:action.payload}]
            }
        case 'REMOVE_TODO':
            const updatedTasks = state.tasks.filter(task => task.id !== action.payload)
            return {
                ...state,
                tasks: updatedTasks
            }
        case 'USER_INPUT':
            const updatedUserInput = action.payload
            return {
                ...state,
                userInput: updatedUserInput
            }
        default:
            return state
    }
}

export default todoReducer