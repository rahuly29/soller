import React from 'react';
import "./harvestCard.css"

const Card = ({ imageUrl, description, profileImage, name, subtitle }) => {
    return (
        <div className="card p-3 rounded-4">
            <img src={imageUrl} className="" alt="" width="64" height="64"/>
            <p className="card-text">{description}</p>
            <div className="card-body p-0">
                <div className='d-flex gap-3 justify-content-start align-items-center '>
                    <div>
                        <img src={profileImage} alt="" />
                    </div>
                    <div>
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
