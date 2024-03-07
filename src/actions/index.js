export const add = (text) => {
    return {
        type: 'ADD_TODO',
        payload: text
    }
}

export const remove = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: id
    }
}
