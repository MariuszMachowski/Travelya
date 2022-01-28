import React from 'react';
import DestinationNav from '../components/destinations/DestinationNav';
import DestinationHeader from '../components/destinations/DestinationHeader';
import DestinationMain from '../components/destinations/DestinationMain';
import Slider from '../components/destinations/Slider';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import imgHeader from '../images/pages/java-DestinationH.jpg';
import imgMap from '../images/pages/JavaMap.jpg';
import img1 from '../images/pages/java-img1.jpg'
import img2 from '../images/pages/java-img2.jpg'
import img3 from '../images/pages/java-img3.jpg'
const Java = () => {
    const title = "Java: The Land of a Thousand Histories";
    const describe = "Java has many exhilarating natural and cultural attractions that are yet to be discovered. You can visit some of the top highlights in Indonesia in the form of stunning temples or active volcanoes. Other options here include trekking through jungle to secluded caves and waterfalls, or you can get out on the water and explore the islands off the coast. In short, Java offers you a whole host of attractions, so whatever kind of holiday you are looking for you will doubtless find something to suit you here."
    return (
        <>
            <DestinationNav />
            <DestinationHeader img={imgHeader} />
            <DestinationMain title={title} imgMap={imgMap} describe={describe} position='30%' />
            <Slider img1={img1} text1="Candi Prambanan" img2={img2} text2="Mount Ljen" img3={img3} text3="Rainbow Village" />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Java;