import React from 'react';
import LatestMoviesDisplay from './LatestView';

class ListView extends React.PureComponent {

    componentDidMount(){
        this.props.fetchProperty();
    }
    render(){
        const { list } = this.props;
        
        return(
            <LatestMoviesDisplay propertyData = {list}></LatestMoviesDisplay>
        )
    }
}

export default ListView;