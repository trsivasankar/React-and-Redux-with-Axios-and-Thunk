import { connect} from 'react-redux';
import { fetchProperty  } from '../actions';
import LatestDetail from '../component/../component/LatestDetails';

export const mapStateToProps = (state) => {
    return{
        details : state.latestmovies.details
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchDetails: (id) => {
            return dispatch(fetchProperty.LatestMoviesDetails(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestDetail);