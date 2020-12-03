import React from 'react';
import UpcomingMovieDisplay from './Upcomingview';

class ListUpcomingView extends React.PureComponent {

    componentDidMount(){
        this.props.fetchProperty();
    }
    render(){
        const { upcominglist } = this.props;
        
        return(
            <UpcomingMovieDisplay propertyUpData = {upcominglist}></UpcomingMovieDisplay>
        )
    }
}

export default ListUpcomingView;