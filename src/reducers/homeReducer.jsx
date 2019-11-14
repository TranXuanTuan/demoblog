
export default (state={}, action) => {
    switch (action.type) {
        case 'HANDLE_HOME':
                console.log(action);
                return { ...state, ...action }
        default:
        return state; 
    }
        
}