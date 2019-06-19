import React, { Component } from 'react';
import './index.scss';
import Questions from './questions/Questions';
import Offers from './offers/Offers';
import Events from './events/Events';

class Restaurant extends Component {
    constructor(props){
        super(props);
        this.state = {
            question: null,
            event: null,
            offer: null,
            showQuestionModal: false,
            showEventModal: false,
            showOfferModal: false,
        };
        this.toggleEventModal = this.toggleEventModal.bind(this);
        this.toggleQuestionModal = this.toggleQuestionModal.bind(this);
        this.toggleOfferModal = this.toggleOfferModal.bind(this);
    }

    toggleQuestionModal() {
        this.setState({
            showQuestionModal: !this.state.showQuestionModal
        });
    }

    toggleOfferModal() {
        this.setState({
            showOfferModal: !this.state.showOfferModal
        });
    }

    toggleEventModal() {
        this.setState({
            showEventModal: !this.state.showEventModal
        });
    }

    render() {
        if(!this.props.restaurants || this.props.restaurants.length == 0){
            return;
        }
        const restaurant = this.props.restaurants[0];
        const { showQuestionModal, showEventModal, showOfferModal, question, event, offer } = this.state;
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
                    <div className='col-4'>
                        <Questions
                            questions={restaurant.questions}
                            toggleQuestionModal={this.toggleQuestionModal}
                            selected={question}
                            showQuestionModal={showQuestionModal}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Offers
                            offers={restaurant.offers}
                            toggleOfferModal={this.toggleOfferModal}
                            selected={offer}
                            showOfferModal={showOfferModal}
                        />
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-12'>
                        <Events
                            events={restaurant.events}
                            toggleEventModal={this.toggleEventModal}
                            selected={event}
                            showEventModal={showEventModal}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Restaurant;