import React from 'react';
import DestinationNav from '../components/destinations/DestinationNav';
import DestinationHeader from '../components/destinations/DestinationHeader';
import DestinationMain from '../components/destinations/DestinationMain';
import Slider from '../components/destinations/Slider';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import imgHeader from '../images/pages/kalimantan-destination.jpg';
import imgMap from '../images/pages/KalimantanMap.jpg';
import img1 from '../images/pages/kalimantan-img1.jpg'
import img2 from '../images/pages/kalimantan-img2.jpg'
import img3 from '../images/pages/kalimantan-img3.jpg'
const Kalimantan = () => {
    const title = "Kalimantan: Natural Haven";
    const describe = "Kalimantan is part of Indonesia and is located on the island of Borneo (which incidentally is Kalimantan in Indonesian). 73% of Borneo is covered by Indonesia and the rest is made up of Malaysia and Brunei. Kalimantan actually means ‘Burning Weather Island’ and derives from the Sanskrit for Kalamanthana as it is located close to the equator and as a result you can expect it to get pretty hot here. If you want to check out the equator in person, then make your way to the city of Pontianak which lies directly over the equatorial line."
    return (
        <>
            <DestinationNav />
            <DestinationHeader img={imgHeader} />
            <DestinationMain title={title} imgMap={imgMap} describe={describe} position='30%' />
            <Slider img1={img1} text1="Derawan Island" img2={img2} text2="Banjarmasin Market" img3={img3} text3="Balikpapan" />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Kalimantan;