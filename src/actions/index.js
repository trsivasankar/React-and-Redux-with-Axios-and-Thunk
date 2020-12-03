import { LatestMovies,UpcomingMovies,NearbyEvents,SliderGallery,LatestMoviesDetail,PostDate } from './moviefetch';

export function openHouseData(response){
    return {type: 'GET_LATEST', payload:response}
}


export function openHouseUpcoming(response){
    return {type: 'GET_UPCOMING', payload:response}
}

export function openEvents(response){
    return {type: 'GET_EVENTS', payload:response}
}

export function openGallery(response){
    return {type: 'GET_GALLERY', payload:response}
}
export function openSelectedid(response){
    return {type: 'GET_SELECTED_LATEST', payload:response}
}
export function openBookingForm(response){
    return {type: 'POST_FORM', payload:response}
}




const getLatestMovie = () => async(dispatch) => {
    try{
        const response = await LatestMovies();
            dispatch(openHouseData(response))
    } catch(err){
            dispatch(openHouseData([]));
    }
}

const LatestMoviesDetails = (id) => async(dispatch) => {
    try{
        const response = await LatestMoviesDetail(id);
            dispatch(openSelectedid(response))
    } catch(err){
            dispatch(openSelectedid([]));
    }
}


const PostFormDetails = (id) => async(dispatch) => {
    try{
        const response = await PostDate(id);
            dispatch(openBookingForm(response))
    } catch(err){
            dispatch(openBookingForm([]));
    }
}

const getUpcomingMovie = () => async(dispatch) => {
    try{
        const response = await UpcomingMovies();
            dispatch(openHouseUpcoming(response))
    } catch(err){
            dispatch(openHouseUpcoming([]));
    }
}
const getLatestEvents = () => async(dispatch) => {
    try{
        const response = await NearbyEvents();
            dispatch(openEvents(response))
    } catch(err){
            dispatch(openEvents([]));
    }
}
const getGallery = () => async(dispatch) => {
    try{
        const response = await SliderGallery();
            dispatch(openGallery(response))
    } catch(err){
            dispatch(openGallery([]));
    }
}



export const fetchProperty ={
    openHouseData,
    getLatestMovie,
    LatestMoviesDetails,
    openSelectedid,
    openHouseUpcoming,
    getUpcomingMovie,
    openEvents,
    getLatestEvents,
    getGallery,
    openGallery,
    PostFormDetails,
    openBookingForm    
   
}