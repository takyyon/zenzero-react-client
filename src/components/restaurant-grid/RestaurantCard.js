import React from 'react';
import './index.scss';

const RestaurantCard = ({ restaurant, openRestaurant, preventButtonAction, 
    user, becomeOwner, deRegister, userId }) => {
    return (
        <div
            className='col-lg-3 col-md-4 col-sm-12 zenzero-restaurant-card'
            onClick={(e) => openRestaurant(e, restaurant._id)}
        >
            <div className='card'>
                <img className='card-img-top'
                    src={restaurant.image}
                    alt='Thumb' />
                <div className='card-body'>
                    <p className='card-title'>
                        {restaurant.name}
                    </p>
                    <p className='card-text zenzero-restaurant-address'>
                        {restaurant.address}
                        &nbsp;&nbsp;<a 
                            onClick={(e) => preventButtonAction(e)}
                            href={`https://www.google.com/maps/place/${restaurant.latitude},${restaurant.longitude}`}>
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
                {
                    user && user.type == 'owner' && (!userId || (userId && user.id != userId))
                        && (!restaurant.user || (restaurant.user._id != user.id)) && (
                        <div className='card-footer zenzero-add-restaurant'>
                            <div className='col-12 text-center'>
                                <span
                                    className="badge badge-info"
                                    onClick={(e) => becomeOwner(e, restaurant._id)}
                                >Become an Owner</span>
                            </div>
                        </div>
                    ) 
                }
                {
                    user && user.type == 'owner' && (!userId || (userId && user.id != userId))
                        && restaurant.user && (restaurant.user._id == user.id) && (
                        <div className='card-footer zenzero-add-restaurant'>
                            <div className='col-12 text-center'>
                                <span
                                    className="badge badge-warning"
                                    onClick={(e) => deRegister(e, restaurant._id)}
                                >De-register</span>
                            </div>
                        </div>
                    ) 
                }

            </div>
        </div>
    );
};

export default RestaurantCard;