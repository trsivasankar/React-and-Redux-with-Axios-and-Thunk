import React from 'react';
import { Link } from 'react-router-dom';


const EventsDisplay = ({eventslist}) => {
    
    
    if(eventslist && eventslist.length){
        return(
            
            <div className="row">
                {eventslist.map((data) =>
                    <div className="col-md-3" key={data.id}>
                            <div className="card">
                            <img src={data.imageUrl} alt={data.imageUrl}/> 
                                    <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">{data.language}</p>
                                    
                                    </div>
                            </div>
                    </div>
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
export default EventsDisplay;