import React from 'react'
import '../../styles/DestinationHeader.css';
const DestinationNav = (props) => {
    return (
        <div className='destinationHeader' style={{ "backgroundImage": `url(${props.img})` }}>

        </div>
    );
}

export default DestinationNav;