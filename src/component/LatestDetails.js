import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class LatestDetail extends Component {
    constructor(props){
        super(props);

        this.state={
            details: this.props.details
        }
    }
  
    componentDidMount(){
        this.props.fetchDetails(this.props.match.params.id);
        
    }
    detailview =({details})=>{
        if(details){
            return(
                <div class="row">
                                <div class="col-12 mt-3">
                                    <div class="card">
                                        <div class="card-horizontal">
                                            <div class="img-square-wrapper">
                                                <img class="" src={details.imageUrl} alt={details.imageUrl}/>
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title">{details.name}</h4>
                                                <p class="card-text">{details.language}</p>
                                                <p class="card-text">{details.type}</p>
                                                <p class="card-text">{details.rate}</p>
                                                <Link to='/booking'><button className="btn btn-primary">Book Now</button></Link>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>   
            )
        }

    }
    render(){
        const { details } = this.props;
        return(
            <div>
                {this.detailview(this.props)}
            </div>
            
        )
    }
}

export default LatestDetail;