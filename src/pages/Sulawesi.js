import React from 'react';
import DestinationNav from '../components/destinations/DestinationNav';
import DestinationHeader from '../components/destinations/DestinationHeader';
import DestinationMain from '../components/destinations/DestinationMain';
import Slider from '../components/destinations/Slider';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import imgHeader from '../images/pages/sulawesi-destination.jpg';
import imgMap from '../images/pages/SulawesiMap.jpg';
import img1 from '../images/pages/sulawesi-img1.jpg'
import img2 from '../images/pages/sulawesi-img2.jpg'
import img3 from '../images/pages/sulawesi-img3.jpg'
const Sulawesi = () => {
    const title = "Sulawesi: Where Adventure Awaits";
    const describe = "Sulawesi is one of the main islands of Indonesia and enjoys a strong domestic tourist market, making it one of the top travel destinations in the country. Foreign visitors to Indonesia however often leave it off the list in favor of Lombok or Bali, but anyone willing to make the trip will be rewarded with amazing attractions and some truly stunning scenery."
    return (
        <>
            <DestinationNav />
            <DestinationHeader img={imgHeader} />
            <DestinationMain title={title} imgMap={imgMap} describe={describe} position='center' />
            <Slider img1={img1} text1="Bunaken" img2={img2} text2="Lembeh Island" img3={img3} text3="Bukit Kasih: Stone Face" />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Sulawesi;