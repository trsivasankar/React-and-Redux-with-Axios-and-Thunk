import React from 'react';
import GalleryDisplay from './Galleryview';

class GalleryView extends React.PureComponent {

    componentDidMount(){
        this.props.fetchProperty();
    }
    render(){
        const { gallerylist } = this.props;
        
        return(
            <GalleryDisplay galleryUpData = {gallerylist}></GalleryDisplay>
        )
    }
}

export default GalleryView;