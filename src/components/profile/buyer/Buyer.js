import React, { Component } from 'react';
import './index.scss';
import Questions from '../../restaurant-detail/questions/Questions';
import Offers from '../../restaurant-detail/offers/Offers';
import Events from '../../restaurant-detail/events/Events';


class Buyer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestionModal: false,
            showEventModal: false,
            showOfferModal: false,
        };
        this.toggleEventModal = this.toggleEventModal.bind(this);
        this.toggleQuestionModal = this.toggleQuestionModal.bind(this);
        this.toggleOfferModal = this.toggleOfferModal.bind(this);
        this.openRestaurant = this.openRestaurant.bind(this);
        this.openBuyer = this.openBuyer.bind(this);
    }

    openBuyer(e, id) {
        this.props.preventButtonAction(e);
        this.props.openBuyer(id);
    }

    openRestaurant(e, id) {
        this.props.preventButtonAction(e);
        this.props.openRestaurant(id);
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

    render() {
        const { buyer, owner, offers, events, questions, question, offer, event, preventButtonAction } = this.props;
        const { showEventModal, showOfferModal, showQuestionModal }  = this.state;
        
        return (
            <div className='zenzero-buyer-profile'>
                <div className='row'>
                    <div className='col-8 zenzero-offer-events'>
                        <div className='row'>
                            <div className='col-12'>
                                <Offers
                                    offers={offers}
                                    toggleModal={this.toggleOfferModal}
                                    selected={offer}
                                    showModal={showOfferModal}
                                    buyer={buyer}
                                    owner={owner}
                                    add={false}
                                    edit={false}
                                    profilePage={true}
                                    openRestaurant={this.openRestaurant}
                                    preventButtonAction={preventButtonAction}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <Events
                                    events={events}
                                    toggleModal={this.toggleEventModal}
                                    selected={event}
                                    showModal={showEventModal}
                                    buyer={buyer}
                                    owner={owner}
                                    add={false}
                                    edit={false}
                                    profilePage={true}
                                    openRestaurant={this.openRestaurant}
                                    preventButtonAction={preventButtonAction}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <Questions
                            questions={questions}
                            toggleModal={this.toggleQuestionModal}
                            selected={question}
                            showModal={showQuestionModal}
                            buyer={buyer}
                            owner={owner}
                            add={false}
                            profilePage={true}
                            openRestaurant={this.openRestaurant}
                            openBuyer={this.openBuyer}
                            preventButtonAction={preventButtonAction}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Buyer;