const defaultState = {
    uMovie:[]
};

export default function(state= defaultState,action) {

    switch(action.type) {
        
        case 'GET_UPCOMING':
        return{...state,uMovie:action.payload}
        default:
            return state
    }

}