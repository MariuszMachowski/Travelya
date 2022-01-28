import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/DestinationNav.css';
const DestinationNav = () => {
    return (
        <nav className='destinationNav'>
            <NavLink to='/' exact>Travelya</NavLink>
        </nav>
    );
}

export default DestinationNav;