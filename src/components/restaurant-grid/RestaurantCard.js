import React from 'react';
import './index.scss';

const RestaurantCard = ({ restaurant, openRestaurant, preventButtonAction }) => {
    return (
        <div
            className='col-lg-3 col-md-4 col-sm-12 zenzero-restaurant-card'
            onClick={(e) => openRestaurant(e, restaurant.id)}
        >
            <div className='card'>
                <img className='card-img-top'
                    src={restaurant.image_url}
                    alt='Thumb' />
                <div className='card-body'>
                    <p className='card-title'>
                        {restaurant.name}
                    </p>
                    <p className='card-text'>
                        {`${restaurant.location.city}, ${restaurant.location.state}`}
                        &nbsp;&nbsp;<a 
                            onClick={(e) => preventButtonAction(e)}
                            href={`https://www.google.com/maps/place/${restaurant.coordinates.latitude},${restaurant.coordinates.longitude}`}>
                            <i className="fas fa-map-marked"></i>
                        </a>
                    </p>
                </div>
                <div className='card-footer'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            {restaurant.price}
                        </div>
                        <div className='col-6 text-right'>
                            <a 
                                onClick={(e) => preventButtonAction(e)}
                                href={restaurant.url} 
                            >Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;