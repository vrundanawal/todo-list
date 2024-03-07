const initialState = {
    tasks: [],

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
        default:
            return state
    }
}

export default todoReducer