import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Buyer from './buyer/Buyer';
import Owner from './owner/Owner';
import RestaurantGrid from '../restaurant-grid/RestaurantGrid';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.openBuyer = this.openBuyer.bind(this);
        this.fetchUserData = this.fetchUserData.bind(this);
        this.openRestaurant = this.openRestaurant.bind(this);
        this.deRegister = this.deRegister.bind(this);
        this.fetchUserData();
    }

    deRegister(e, id) {
        this.props.preventButtonAction(e);

        this.props.deRegister(id, this.props.userId);
    }

    openBuyer(id) {
        this.props.history.push(`/buyer/${id}`);
    }

    openRestaurant(id) {
        this.props.history.push(`/restaurant/${id}`);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.userId &&  (
            (prevProps.userId != this.props.userId) ||
            (prevProps.buyer != this.props.buyer))) {
            this.fetchUserData();
        }
    }

    fetchUserData() {
        const { buyer, userId } = this.props;
        
        if(buyer) {
            this.props.findBuyerInfoById(userId);
            return;
        }
        this.props.findOwnerInfoById(userId);
    }

    componentDidMount() {
        this.fetchUserData();
    }

    render() {
        
        const { user, buyer, userId, userInfo,
            preventButtonAction, history, question, offer, event } = this.props;
        
        if(!userInfo) {
            return null;
        }

        return (
            <div className='col-12'>
                <h3>
                    <span className="badge badge-success">{userInfo.name}</span>
                    &nbsp;&nbsp;
                    <span className="badge badge-info zenzero-profile-user">{buyer? 'Buyer': 'Owner'}</span>
                </h3>
                

                {
                    (buyer) ? (
                        <Buyer
                            offers={userInfo.offers}
                            events={userInfo.events}
                            questions={userInfo.questions}
                            user={user}
                            question={question}
                            event={event}
                            offer={offer}
                            openBuyer={this.openBuyer}
                            openRestaurant={this.openRestaurant}
                            findOfferById={this.props.findOfferById}
                            findQuestionById={this.props.findQuestionById}
                            findEventById={this.props.findEventById}
                            preventButtonAction={preventButtonAction}
                        />
                    ) : (
                        <RestaurantGrid
                            restaurants={userInfo.restaurants}
                            user={user}
                            userId={userId}
                            deRegister={this.deRegister}
                            history={history}
                            preventButtonAction={preventButtonAction}
                            profile={true}
                        />
                    )
                }
            </div>
        );
    }
}

export default Profile;