
const initialState = {
    isPaginationRequired: true
}
const reducerFunc = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_PAGE_NUMBERS':
            return {
                ...state,
                isPaginationRequired: action.isPaginationRequired
            }    
        default:
            return state;
    }
};

export default reducerFunc;