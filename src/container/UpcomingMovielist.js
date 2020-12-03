import { connect} from 'react-redux';
import { fetchProperty  } from '../actions';
import ListUpcomingView from '../component/UpcomingMoviewlist';

export const mapStateToProps = (state) => {
    console.log(">>>>>>",state)
    return{
        upcominglist : state.upcoming.uMovie
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchProperty: () => {
            return dispatch(fetchProperty.getUpcomingMovie())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUpcomingView);