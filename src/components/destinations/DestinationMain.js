import React from 'react';
import '../../styles/DestinationMain.css';
const DestinationMain = (props) => {
    return (
        <div className='destinationMain'>
            <h2 className='destinationTitle'>{props.title}</h2>
            <div className="mapWrap" style={{ "backgroundImage": `url(${props.imgMap})`, 'backgroundPosition': `${props.position}` }}></div>
            <p>{props.describe}</p>
        </div>
    );
}

export default DestinationMain;