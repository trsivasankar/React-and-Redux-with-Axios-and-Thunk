import { connect} from 'react-redux';
import { fetchProperty  } from '../actions';
import GalleryView from '../component/Gallerylist';

export const mapStateToProps = (state) => {
    console.log(">>>>>>",state)
    return{
        gallerylist : state.gallery.uGallery
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchProperty: () => {
            return dispatch(fetchProperty.getGallery())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryView);