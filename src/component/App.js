import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import ListView from '../container/LatestMovielist';
import ListUpcomingView from '../container/UpcomingMovielist';
import NearbyView from '../container/NearbyEvents';
import Header from './Header';
import Footer from './Footer';
import GalleryDisplay from '../container/GetGallerylist';
import LatestDetail from '../container/LatestDetails';
import Booking from '../component/BookingForm';
import Ticketbooked from '../component/tickedbooked';

class App extends React.PureComponent {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <GalleryDisplay/>
                     <Route exact path="/latest" component={ListView}></Route>
                     <Route exact path="/upcoming" component={ListUpcomingView}></Route>
                     <Route exact path="/nearbyevents" component={NearbyView}></Route>
                     <Route path="/details/:id" component={LatestDetail}></Route>
                     <Route path="/Booking" component={Booking}></Route>
                     <Route path="/ticketbooked" component={Ticketbooked}></Route>
                    <Footer/>
                   
                </div>
            </BrowserRouter>
        )
    }
}
export default App;