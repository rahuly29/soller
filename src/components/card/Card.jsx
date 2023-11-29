import React from 'react';
import "./card.css"

const Card = ({ imageUrl, title, description }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <img src={imageUrl} alt="" className='img-fluid'/>
          <h2 className='card-title mt-2 mb-2'>{title}</h2>
          <p className='card-para'>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
