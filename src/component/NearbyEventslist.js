import React from 'react';
import EventsDisplay from './NearbyEventsview';

class ListEventsView extends React.PureComponent {

    componentDidMount(){
        this.props.fetchProperty();
    }
    render(){
        const { nearbylist } = this.props;
        
        return(
            <EventsDisplay eventslist = {nearbylist}></EventsDisplay>
        )
    }
}

export default ListEventsView;