import React from 'react';

const Card = ({ logement }) => {
    console.log(logement);
    return (
        <div className='globalCard'>
            <div className='card'>
                <img src={logement.cover} alt={"photo " + logement.title}></img>
                <h2 className='cardTitle'>{logement.title}</h2>
            </div>
        </div>
    );
};

export default Card;