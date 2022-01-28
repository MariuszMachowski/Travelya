import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-scroll';
const Header = () => {
    return (
        <header id='header'>
            <div className="bgDark">
                <h1 className='logo'><Link to="header" spy={true} smooth={true} offset={0} duration={500}>Travelya</Link></h1>
                <div className='headerInfo'>
                    <h1>Country full of <br /><span className="outline">beauty,<br /></span> Indonesia</h1>
                    <p>Let's explore of the third largest country in the world, namely Indonesia. The beauty of scenic natural landscapes blended with extraordinary culture of its people makes this place unique.</p>
                </div>
            </div>
        </header>
    );
}

export default Header;