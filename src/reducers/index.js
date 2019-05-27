
const initialState = {
    isPaginationRequired: true
}
const reducerFunc = (state = initialState, action) => {
    console.log("action", action,"state", state);
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