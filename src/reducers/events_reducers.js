const defaultState = {
    lEvent:[]
};


export default function(state = defaultState,action) {

    switch(action.type) {
        case 'GET_EVENTS':
        return {...state,lEvent:action.payload}
        
        default:
            return state
    }

}