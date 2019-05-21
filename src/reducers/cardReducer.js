export const cardReducer = (state=[], action) => {
    switch (action.type) {
        case 'CREATE_CARD':
            return [...state, action.info]
        default:
            return state
    }
}