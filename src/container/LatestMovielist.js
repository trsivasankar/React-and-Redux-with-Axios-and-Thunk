import { connect} from 'react-redux';
import { fetchProperty  } from '../actions';
import ListView from '../component/LatestMovielist';

export const mapStateToProps = (state) => {
    console.log(">>>>>>",state)
    return{
        list : state.latestmovies.lMovie
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchProperty: () => {
            return dispatch(fetchProperty.getLatestMovie())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);