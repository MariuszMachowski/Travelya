import React from 'react';
import DestinationNav from '../components/destinations/DestinationNav';
import DestinationHeader from '../components/destinations/DestinationHeader';
import DestinationMain from '../components/destinations/DestinationMain';
import Slider from '../components/destinations/Slider';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import imgHeader from '../images/pages/maluku-destination.jpg';
import imgMap from '../images/pages/MalukuMap.jpg';
import img1 from '../images/pages/maluku-img1.jpg'
import img2 from '../images/pages/maluku-img2.jpg'
import img3 from '../images/pages/maluku-img3.jpg'
const Maluku = () => {
    const title = "Maluku & Papua: Paradise of the East";
    const describe = "In the old days, the name Maluku & Papua was a colorful moniker ‘the Spice Islands’. For years explorers tried to find the elusive islands in search of the delights grown here such as cloves, nutmeg, and mace, and although Maluku & Papua is no longer one of the main producers of spices in Indonesia it still makes a great trip if you are looking to visit one of the less-explored parts of this amazing archipelago."
    return (
        <>
            <DestinationNav />
            <DestinationHeader img={imgHeader} />
            <DestinationMain title={title} imgMap={imgMap} describe={describe} position='right' />
            <Slider img1={img1} text1="Palau Kei" img2={img2} text2="Ternate" img3={img3} text3="Palau Seram" />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Maluku;