import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Attractions.css';
import img1 from '../images/attractions/rice1.jpg';
import img2 from '../images/attractions/puraUlun.jpg';
import img3 from '../images/attractions/SulubanBeach.jpg';
import img5 from '../images/attractions/Bromo (1).jpg';
import img6 from '../images/attractions/Toba.jpg';
import img7 from '../images/attractions/raja-ampat.jpg';
import img8 from '../images/attractions/borobudurTemple.jpg';
const Attractions = () => {
    return (
        <section id='places' className="attractions">
            <h2 className='highlight places'>Highlight Attractions</h2>
            <div className="placesWrapper">
                <Carousel className='gallery' infiniteLoop interval={4000} autoPlay showArrows={true} showStatus={false}>
                    <div className='attraction' ><img src={img5} alt="place" /><p className="name">Bromo Volcano</p></div>
                    <div className='attraction' ><img src={img1} alt="place" /><p className="name">Rice Terraces</p></div>
                    <div className='attraction' ><img src={img2} alt="place" /><p className="name">Ulun Danu Beratan</p></div>
                    <div className='attraction' ><img src={img8} alt="place" /><p className="name">Borobudur Temple</p></div>
                    <div className='attraction' ><img src={img3} alt="place" /><p className="name">Suluban Beach</p></div>
                    <div className='attraction' ><img src={img6} alt="place" /><p className="name">Toba Lake</p></div>
                    <div className='attraction' ><img src={img7} alt="place" /><p className="name">Raja Ampat</p></div>
                </Carousel>
            </div>
        </section>
    );
}

export default Attractions;