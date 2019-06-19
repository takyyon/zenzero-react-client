import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const RestaurantCard = ({ restaurant }) => {
    return (
        <Link to={`restaurant/${restaurant.id}`} >
            <div className='col-lg-4 col-md-6 col-sm-12 zenzero-restaurant-card'>
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
                                target='_blank'
                                href={`https://www.google.com/maps/place/${restaurant.coordinates.latitude},${restaurant.coordinates.longitude}`}>
                                <i class="fas fa-map-marked"></i>
                            </a>
                        </p>
                    </div>
                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col-6 text-left'>
                                {restaurant.price}
                            </div>
                            <div className='col-6 text-right'>
                                <a href={restaurant.url} target='_blank'>Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RestaurantCard;