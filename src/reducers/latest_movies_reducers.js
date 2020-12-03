const defaultState = {
    lMovie:[]
};


export default function(state = defaultState,action) {

    switch(action.type) {
        case 'GET_LATEST':
        return {...state,lMovie:action.payload}
        case 'GET_SELECTED_LATEST':
            return{...state,details:action.payload}
        case 'POST_COURSES':
                return{...state,article:action.payload}
        case 'POST_FORM':
                return{...state,posted:action.payload}        
        default:
            return state
    }

}