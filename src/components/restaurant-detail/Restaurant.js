import React, { Component } from 'react';
import './index.scss';
import Questions from './questions/Questions';
import Offers from './offers/Offers';
import Events from './events/Events';

class Restaurant extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            add: false,
            showQuestionModal: false,
            showEventModal: false,
            showOfferModal: false,
        };
        this.toggleEventModal = this.toggleEventModal.bind(this);
        this.toggleQuestionModal = this.toggleQuestionModal.bind(this);
        this.toggleOfferModal = this.toggleOfferModal.bind(this);
        this.toggleEditAddModal = this.toggleEditAddModal.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.editEvent = this.editEvent.bind(this);
    }

    componentDidMount(){
        const { restaurantId } = this.props;
    }

    toggleQuestionModal(e, id=null) {
        this.props.preventButtonAction(e);
        if(id) {
            this.props.findQuestionById(id);
        }
        this.setState({
            showQuestionModal: !this.state.showQuestionModal,
            edit: false,
            add: false
        });
    }

    toggleOfferModal(e, id=null) {
        this.props.preventButtonAction(e);
        if(id) {
            this.props.findOfferById(id);
        }
        this.setState({
            showOfferModal: !this.state.showOfferModal,
            edit: false,
            add: false
        });
    }

    toggleEventModal(e, id=null) {
        this.props.preventButtonAction(e);
        if(id) {
            this.props.findEventById(id);
        }
        this.setState({
            showEventModal: !this.state.showEventModal,
            edit: false,
            add: false
        });
    }

    toggleEditAddModal(e, edit=false, add=false){
        this.props.preventButtonAction(e);
        this.setState({
            edit: edit,
            add: add
        });
    }

    editEvent(e, add, title, text, start, end) {
        this.toggleEventModal(e);
        /**
         * Edit Event and refresh Restaurant Here.
         */
    }

    deleteEvent(e) {
        this.toggleEventModal(e);
        /**
         * Delete Event and Refresh Restaurant here.
         */
    }

    render() {
        if(!this.props.restaurant){
            return;
        }
        const restaurant = this.props.restaurant;
        const { buyer, owner, question, offer, event } = this.props;
        const { showQuestionModal, showEventModal, showOfferModal, add, edit} = this.state;
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
                            toggleModal={this.toggleQuestionModal}
                            toggleEditAddModal={this.toggleEditAddModal}
                            selected={question}
                            showModal={showQuestionModal}
                            buyer={buyer}
                            owner={owner}
                            add={add}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Offers
                            offers={restaurant.offers}
                            toggleModal={this.toggleOfferModal}
                            toggleEditAddModal={this.toggleEditAddModal}
                            selected={offer}
                            showModal={showOfferModal}
                            buyer={buyer}
                            owner={owner}
                            add={add}
                            edit={edit}
                        />
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-12'>
                        <Events
                            events={restaurant.events}
                            toggleModal={this.toggleEventModal}
                            toggleEditAddModal={this.toggleEditAddModal}
                            selected={event}
                            showModal={showEventModal}
                            buyer={buyer}
                            owner={owner}
                            add={add}
                            edit={edit}
                            deleteEvent={this.deleteEvent}
                            editEvent={this.editEvent}
                        />
                    </div>
                </div>
                {
                    (showQuestionModal || showEventModal || showOfferModal) && (
                        <div className='zenzero-mask'>
                            &nbsp;
                        </div>
                    )
                }
                
            </div>
        );
    }
}

export default Restaurant;