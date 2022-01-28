import React from 'react';
import '../styles/Destinations.css';
import { NavLink } from 'react-router-dom'
const Destinations = () => {
    return (
        <section id='destinations' className="destinations">
            <h2 className='highlight'>Explore by Region</h2>
            <div className="destinations">
                <NavLink to='/bali' className="destination">
                    <p>Bali</p>
                </NavLink>
                <NavLink to='/java' className="destination">
                    <p>Java</p>
                </NavLink>
                <NavLink to='/sulawesi' className="destination">
                    <p>Sulawesi</p>
                </NavLink>
                <NavLink to='/sumatra' className="destination">
                    <p>Sumatra</p>
                </NavLink>
                <NavLink to='/maluku-papua' className="destination">
                    <p>{`Maluku & Papua`}</p>
                </NavLink>
                <NavLink to='/kalimantan' className="destination">
                    <p>Kalimantan</p>
                </NavLink>
                <div className="border"></div>
            </div>
        </section>
    );
}

export default Destinations;