import React from 'react';
import DestinationNav from '../components/destinations/DestinationNav';
import DestinationHeader from '../components/destinations/DestinationHeader';
import DestinationMain from '../components/destinations/DestinationMain';
import Slider from '../components/destinations/Slider';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import imgHeader from '../images/pages/sumatra-destination.jpg';
import imgMap from '../images/pages/SumatraMap.jpg';
import img1 from '../images/pages/sumatra-img1.jpg'
import img2 from '../images/pages/sumatra-img2.jpg'
import img3 from '../images/pages/sumatra-img3.jpg'
const Sumatra = () => {
    const title = "Sumatra: Land of Mountains, Beaches and Waves";
    const describe = "Sumatra sits in western Indonesia and makes up part of the Sunda Islands. One of the big draws in Sumatra is the diversity of experiences it offers visitors, and you can spend time in big cities like Medan or Banda Aceh, relax on soft sandy beaches or go trekking inside some of the most famous national parks in Indonesia. When it comes to unique culture, Sumatra doesn’t disappoint, and you can travel to Lake Toba to learn about the Batak way of life, or visit Padang which is the home of the Minangkabau people who run a matriarchal society."
    return (
        <>
            <DestinationNav />
            <DestinationHeader img={imgHeader} />
            <DestinationMain title={title} imgMap={imgMap} describe={describe} position='left' />
            <Slider img1={img1} text1="Medan" img2={img2} text2="Mentawai Islands" img3={img3} text3="Palembang" />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Sumatra;