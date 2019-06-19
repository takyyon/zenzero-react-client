import React from 'react';
import './index.scss';

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-12'>
            <div className='card'>
                <img className='card-img-top'
                    alt='Thumbnail' />
                <div className='card-body'>
                    <p className='card-title'>
                        {restaurant.name}
                    </p>
                    <p className='card-text'>
                        <i className='fas fa-file-alt'></i>
                        
                    </p>
                </div>
                <div className='card-footer'>
                    
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;