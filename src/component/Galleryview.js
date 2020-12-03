import React from 'react';
import Slider from "react-slick";


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const GalleryDisplay = ({galleryUpData}) => {
    
    
    if(galleryUpData){
        return(
            
            <Slider {...settings}>
            {galleryUpData.map((item)=>{
                return(
                    <div className="slider-item">
                        <div className="image"
                        style={{background:`url(/images/galleries/${item.images[0].img})`}}>

                        </div>
                    </div>
                )
            })}
        </Slider>
           
        )
    }


    return(
        <div className="nodata">
            <img src={'/assets/loading.gif'}/>
        </div>
    )
}
export default GalleryDisplay;