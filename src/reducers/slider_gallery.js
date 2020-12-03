
const defaultState = {
    uGallery:[]
};

export default function(state=defaultState,action) {

    switch(action.type) {
        
        case 'GET_GALLERY':
        return{...state,uGallery:action.payload}
        default:
            return state
    }

}