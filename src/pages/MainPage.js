import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Discover from '../components/Discover';
import Destinations from '../components/Destinations';
import Attractions from '../components/Attractions';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
const MainPage = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Discover />
            <Destinations />
            <Attractions />
            <Newsletter />
            <Footer />
        </>
    );
}

export default MainPage;
