import React from 'react';

const Card = ({logement}) => {
console.log(logement);
    return (
       <div className='globalCard'>
        <div className='card'>
            <h2 className='cardTitle'>{logement.title}</h2>
            <img src={logement.cover} alt={"photo " + logement.title}></img>
        </div>
       </div>
    );
};

export default Card;