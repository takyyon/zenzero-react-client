import React, { Component } from 'react';
import './index.scss';

class Restaurant extends Component {
    constructor(props){
        super(props);
    }

    render() {
        if(!this.props.restaurants || this.props.restaurants.length == 0){
            return;
        }
        const restaurant = this.props.restaurants[0];
        return (
            <div className='zenzero-restaurant-detail'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col-5'>
                                <img
                                    className='zenzero-restaurant-thumb'
                                    src={restaurant.image_url}
                                    alt='Restuarant Thumbnail'
                                />
                            </div>
                            <div className='col-7'>
                                <h2 className='zenzero-restaurant-name'>{restaurant.name}</h2>
                                <h4 className='zenzero-restaurant-phone'>{restaurant.phone}</h4>
                                <div className='zenzero-restaurant-categories'>
                                    {
                                        restaurant.categories && restaurant.categories.map((category, index)=> {
                                            return (
                                                <span
                                                    key={`category-${index}`}
                                                    className="badge badge-primary">
                                                    {category.title}
                                                </span>
                                            );
                                        })
                                    }
                                    {
                                        (!restaurant.categories || restaurant.categories.length == 0) && (
                                            <span className="badge badge-danger">
                                                    No Categories listed for this restaurant
                                            </span>
                                        )
                                    }
                                </div>
                                <h5 className='zenzero-restaurant-address'>
                                    {
                                        restaurant.location && restaurant.location.display_address ? (
                                            <span>
                                                {restaurant.location.display_address.join(' ')}
                                                &nbsp;
                                                <a 
                                                    target='_blank'
                                                    href={`https://www.google.com/maps/place/${restaurant.coordinates.latitude},${restaurant.coordinates.longitude}`}>
                                                    <i className="fas fa-map-marked"></i>
                                                </a>
                                            </span>
                                        ) : (
                                            'No Address found for this restaurant'
                                        )
                                    }
                                </h5>
                                <h5 className='zenzero-restaurant-yelp'>
                                    <a
                                        target='_blank'
                                        href={restaurant.url}
                                    >Yelp Link</a>
                                </h5>
                                <h5 className='zenzero-restaurant-price'>
                                    <strong>Price: </strong>{restaurant.price}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 zenzero-restaurant-questions'>
                        <h3>Questions &nbsp; <i className="far fa-arrow-alt-circle-down"></i></h3>
                        <span className="badge badge-secondary">
                            <i className="fas fa-plus-circle"></i>
                            &nbsp;New Question
                        </span>
                        {
                            restaurant.questions && restaurant.questions.map((question, index) => {
                                return (
                                    <div
                                        key={`questions-${index}`}
                                        className="row zenzero-restaurant-question">
                                        <div className="card card-block">
                                            {question.title}
                                        </div>
                                    </div>
                                );
                            })
                        }
                        {
                            (!restaurant.questions || restaurant.questions.length == 0) && (
                                <h6>No Questions found.</h6>
                            )
                        }
                    </div>
                    
                </div>
                

                <div className='row zenzero-restaurant-offers'>
                    <div className='col-12'>
                        <h3>Offers &nbsp;<i className="far fa-arrow-alt-circle-right"></i></h3>
                        <div className="row flex-row flex-nowrap">
                            {
                                restaurant.offers && restaurant.offers.map((offer, index) => {
                                    return (
                                        <div
                                            key={`offers-${index}`}
                                            className="col-2 text-center zenzero-restaurant-offer">
                                            <div className="card card-block">
                                                {offer.title}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            {
                                (!restaurant.offers || restaurant.offers.length == 0) && (
                                    <h6>No Offers found.</h6>
                                )
                            }
                        </div>
                    </div>
                </div>
                
                <div className='row zenzero-restaurant-events'>
                    <div className='col-12'>
                        <h3>Events &nbsp;<i className="far fa-arrow-alt-circle-right"></i></h3>
                        <div className="row flex-row flex-nowrap">
                            {
                                restaurant.events && restaurant.events.map((event, index) => {
                                    return (
                                        <div
                                            key={`events-${index}`}
                                            className="col-2 text-center zenzero-restaurant-event">
                                            <div className="card card-block">
                                                {event.title}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            {
                                (!restaurant.events || restaurant.events.length == 0) && (
                                    <h6 className='col-2 text-center'>No Events found.</h6>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Restaurant;