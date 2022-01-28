import React from 'react';
import DestinationNav from '../components/destinations/DestinationNav';
import DestinationHeader from '../components/destinations/DestinationHeader';
import DestinationMain from '../components/destinations/DestinationMain';
import Slider from '../components/destinations/Slider';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import imgHeader from '../images/pages/bali-destination.jpg';
import imgMap from '../images/pages/BaliMap.jpg';
import img1 from '../images/pages/bali-img1.jpg'
import img2 from '../images/pages/bali-img2.jpg'
import img3 from '../images/pages/bali-img3.jpg'
const Bali = () => {
    const title = "Bali & Nusa Tenggara: explore the magical southern Indonesian archipelago";
    const describe = "Bali & Nusa Tenggara is one of the most evocative and popular tourist islands of the entire Indonesian archipelago. A visit here sparks the senses. The intoxicating fragrance of incense and clove oil hangs in the thick tropical air. Peanuts sizzle at roadside stalls, petal-strewn offerings smolder on busy sidewalks, and traditional gamelan music jangles against the buzz of mopeds."
    return (
        <>
            <DestinationNav />
            <DestinationHeader img={imgHeader} />
            <DestinationMain title={title} imgMap={imgMap} describe={describe} position='bottom' />
            <Slider img1={img1} text1="Waterbom Bali" img2={img2} text2="Kelimutu Volcano" img3={img3} text3="Sekumpul Waterfall" />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Bali;