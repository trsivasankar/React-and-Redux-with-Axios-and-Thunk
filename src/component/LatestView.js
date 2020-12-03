import React from 'react';
import { Link } from 'react-router-dom';


const LatestMoviesDisplay = ({propertyData}) => {
    
    
    if(propertyData && propertyData.length){
        return(
            
            <div className="row">
                {propertyData.map((data) =>
                    <Link to={`/details/${data.id}`} className="col-md-3" key={data.id}>
                            <div className="card">
                            <img src={data.imageUrl} alt={data.imageUrl}/> 
                                    <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">{data.language}</p>
                                    <button className="btn btn-primary">Book Now</button>
                                    
                                    </div>
                            </div>
                    </Link>
                   )}
            </div>
           
        )
    }


    return(
        <div className="nodata">
            <img src={'/assets/loading.gif'}/>
        </div>
    )
}

export default LatestMoviesDisplay;