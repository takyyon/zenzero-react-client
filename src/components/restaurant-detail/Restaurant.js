import React, { Component } from 'react';
import './index.scss';
import { browserHistory } from 'react-router';
import { Alert } from 'reactstrap';
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
            alertBox: false
        };
        this.toggleEventModal = this.toggleEventModal.bind(this);
        this.toggleQuestionModal = this.toggleQuestionModal.bind(this);
        this.toggleOfferModal = this.toggleOfferModal.bind(this);
        this.toggleEditAddModal = this.toggleEditAddModal.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.deleteOffer = this.deleteOffer.bind(this);
        this.editOffer = this.editOffer.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
        this.addComment = this.addComment.bind(this);
        this.openRestaurant = this.openRestaurant.bind(this);
        this.openBuyer = this.openBuyer.bind(this);
        this.openOwner = this.openOwner.bind(this);
        this.fetchRestaurantData = this.fetchRestaurantData.bind(this);
        this.likOffer = this.likOffer.bind(this);
        this.likeEvent = this.likeEvent.bind(this);
        this.isEventLiked = this.isEventLiked.bind(this);
        this.isOfferLiked = this.isOfferLiked.bind(this);
        this.dismissAlert = this.dismissAlert.bind(this);
        this.forceLogin = this.forceLogin.bind(this);
        this.fetchRestaurantData();
    }

    dismissAlert(e, flag = false) {
        this.props.preventButtonAction(e);
        this.setState({
            alertBox: flag
        });
    }

    isEventLiked(likes) {
        const { user } = this.props;
        for(var i = 0;i<likes.length;++i) {
            if(user.id == likes[i]._id){
                return true;
            }
        }
        return false;
    }

    isOfferLiked(likes) {
        const { user } = this.props;
        for(var i = 0;i<likes.length;++i) {
            if(user.id == likes[i]._id){
                return true;
            }
        }
        return false;
    }

    likOffer(e, liked, id) {
        this.props.preventButtonAction(e);
        
        if(liked) {
            this.props.unLikeOffer(id, this.state.restaurantId);
            return;
        }
        this.props.likeOffer(id, this.state.restaurantId);
    }

    likeEvent(e, liked, id) {
        this.props.preventButtonAction(e);
        
        if(liked) {
            this.props.unLikeEvent(id, this.state.restaurantId);
            return;
        }
        this.props.likeEvent(id, this.state.restaurantId);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.restaurantId && prevProps.restaurantId != this.props.restaurantId) {
            this.fetchRestaurantData();
        } 
    }

    fetchRestaurantData() {
        this.setState({
            edit: false,
            add: false,
            showQuestionModal: false,
            showEventModal: false,
            showOfferModal: false
        }, () => {
            this.props.findRestaurantById(this.props.restaurantId);
        });
        
    }

    componentDidMount(){
        this.fetchRestaurantData();
    }

    openBuyer(e, id) {
        this.props.preventButtonAction(e);
        this.props.history.push(`/buyer/${id}`);
    }

    openOwner(e, id) {
        this.props.preventButtonAction(e);
        this.props.history.push(`/owner/${id}`);
    }

    openRestaurant(e, id){
        this.props.preventButtonAction(e);
        const  { user } = this.props;
        if(user && user.type == 'owner') {
            return;
        }
        this.props.history.push(`/restaurant/${id}`);
    }

    toggleQuestionModal(e, id=null) {
        this.props.preventButtonAction(e);
        const { user } = this.props;
        if(!user) {
            this.dismissAlert(e, true);
            // this.props.toggleLoginPopup(e, true);
            return;
        }
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
        const { event, restaurantId } = this.props;
        if(add) {
            this.props.addEvent(title, text, start, end, restaurantId);
            return;
        }
        if(event){
            event.title = title;
            event.text = text;
            event.start = start;
            event.end = end;
            this.props.editEvent(event, restaurantId);
        }
    }

    deleteEvent(e) {
        this.toggleEventModal(e);
        /**
         * Delete Event and Refresh Restaurant here.
         */
        const { restaurantId, event } = this.props;
        if(event) {
            this.props.deleteEvent(event._id, restaurantId);
        }
    }

    editOffer(e, add, code, text, start, end) {
        this.toggleOfferModal(e);
        /**
         * Edit Offer and refresh Restaurant Here.
         */
        const { offer, restaurantId } = this.props;
        if(add) {
            this.props.addOffer(code, text, start, end, restaurantId);
            return;
        }
        if(offer){
            offer.code = code;
            offer.text = text;
            offer.start = start;
            offer.end = end;
            this.props.editOffer(offer, restaurantId);
        }
    }

    deleteOffer(e) {
        this.toggleOfferModal(e);
        /**
         * Delete Offer and Refresh Restaurant here.
         */
        const { restaurantId, offer } = this.props;
        if(offer) {
            this.props.deleteOffer(offer._id, restaurantId);
        }
    }

    addQuestion(e, question) {
        this.toggleQuestionModal(e);
        /**
         * Add New Question Here
         */
        this.props.addQuesiton(question, this.props.restaurantId);
    }

    addComment(e, comment) {
        this.props.preventButtonAction(e);
        /**
         * Add Comment to question and refresh
         */
        const { restaurantId, question } = this.props;
        if(question) {
            this.props.addComment(comment, question._id, restaurantId);
        }
    }

    forceLogin(e) {
        this.props.preventButtonAction(e);
        this.props.toggleLoginPopup(e, true);
    }

    render() {
        if(!this.props.restaurant){
            return null;
        }
        
        const restaurant = this.props.restaurant;
        const { user, question, offer, event } = this.props;
        const { showQuestionModal, showEventModal, showOfferModal, add, edit} = this.state;
        if(this.state.alertBox && user){
            this.dismissAlert();
        }
        return (
            <div className='zenzero-restaurant-detail'>
                <Alert color='warning' 
                    isOpen={this.state.alertBox}
                    toggle={(e) => this.dismissAlert(e)}>
                    To ask a question you will need to login as a buyer.
                    &nbsp;
                    <button onClick={(e) => {this.forceLogin(e)}} className='zenzero-alert-click'>
                        {`Click Here `}
                    </button> to login now.
                </Alert>
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
                                <h2 className='zenzero-restaurant-name'>
                                    {restaurant.name}
                                </h2>
                                <h6>
                                    {
                                        restaurant.user && (
                                            <span
                                                className="badge badge-info zenzero-owner"
                                                onClick={(e) => this.openOwner(e, restaurant.user._id)}>
                                                {`Owned By: ${restaurant.user.name}`}
                                            </span>
                                        )
                                    }
                                </h6>
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
                            restaurant={restaurant}
                            showModal={showQuestionModal}
                            user={user}
                            add={add}
                            addQuestion={this.addQuestion}
                            addComment={this.addComment}
                            openRestaurant={this.openRestaurant}
                            openBuyer={this.openBuyer}
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
                            restaurant={restaurant}
                            showModal={showOfferModal}
                            user={user}
                            add={add}
                            edit={edit}
                            deleteOffer={this.deleteOffer}
                            editOffer={this.editOffer}
                            openRestaurant={this.openRestaurant}
                            likOffer={this.likOffer}
                            isOfferLiked={this.isOfferLiked}
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
                            restaurant={restaurant}
                            showModal={showEventModal}
                            user={user}
                            add={add}
                            edit={edit}
                            deleteEvent={this.deleteEvent}
                            editEvent={this.editEvent}
                            openRestaurant={this.openRestaurant}
                            likeEvent={this.likeEvent}
                            isEventLiked={this.isEventLiked}
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