import { connect} from 'react-redux';
import { fetchProperty  } from '../actions';
import ListEventsView from '../component/NearbyEventslist';

export const mapStateToProps = (state) => {
    console.log(">>>>>>",state)
    return{
        nearbylist : state.events.lEvent
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchProperty: () => {
            return dispatch(fetchProperty.getLatestEvents())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEventsView);