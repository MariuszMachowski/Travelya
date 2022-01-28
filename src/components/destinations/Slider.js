import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../../styles/Slider.css';
const Slider = (props) => {
    return (
        <div className="slider">
            <h2>Must-See Places</h2>
            <Carousel className='destinationGallery' infiniteLoop interval={4000} autoPlay showArrows={true} showStatus={false}>
                <div className='destinationImgWrap' ><img src={props.img1} alt="place" /><p className="destinationName">{props.text1}</p></div>
                <div className='destinationImgWrap' ><img src={props.img2} alt="place" /><p className="destinationName">{props.text2}</p></div>
                <div className='destinationImgWrap' ><img src={props.img3} alt="place" /><p className="destinationName">{props.text3}</p></div>
            </Carousel>

        </div>
    );
}

export default Slider;