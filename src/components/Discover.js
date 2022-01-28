import React from 'react'
import '../styles/Discover.css';
import landscape from '../images/background.jpg'
const Discover = () => {
    const handleVideoClick = () => {
        const backgroundDiv = document.querySelector('div.background');
        const video = document.querySelector('iframe.video');
        backgroundDiv.classList.add('active');
        video.setAttribute("src", "https://www.youtube.com/embed/eASUa5fgjnQ?autoplay=1");
    }
    return (
        <section id='discover' className="discover">
            <h2 className='discoverTitle'>Experience adventures in moving frames</h2>
            <div className="videoWrap">
                <div onClick={handleVideoClick} className="background">
                    <img className='landscape' src={landscape} alt="landscape" />
                    <i className="fas fa-play"></i>
                </div>
                <iframe className='video' width="100%" height="100%" src="https://www.youtube.com/embed/eASUa5fgjnQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            </div>
            <h3 className="discoverSubtitle">An exploration of the wondrous places</h3>
        </section>
    );
}

export default Discover;