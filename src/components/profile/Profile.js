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
    }

    openBuyer(id) {
        this.props.history.push(`/buyer/${id}`);
    }

    openRestaurant(id) {
        this.props.history.push(`restaurant/${id}`);
    }

    componentDidUpdate(prevProps) {
        if((prevProps.userId != this.props.userId) ||
            prevProps.userId == this.props.userId &&
            prevProps.buyerProfile != this.props.buyerProfile) {
            this.fetchUserData();
        }
    }

    fetchUserData() {
        const { buyerProfile, userId } = this.props;
        if(buyerProfile) {
            this.props.findBuyerInfoById(userId);
            return;
        }
        this.props.findOwnerInfoById(userId);
    }

    componentDidMount() {
        this.fetchUserData();
    }

    render() {
        const { buyer, owner, userId, userInfo, buyerProfile, preventButtonAction, history } = this.props;
        if(owner && owner.userId != userId){
            return <Redirect to='/'/>;
        }
        
        return (
            <div className='col-12'>
                <h3><span className="badge badge-success">{userInfo.name}</span></h3>
                {
                    buyerProfile ? (
                        <Buyer
                            offers={userInfo.offers}
                            events={userInfo.events}
                            questions={userInfo.questions}
                            buyer={buyer}
                            owner={owner}
                            openBuyer={this.openBuyer}
                            openRestaurant={this.openRestaurant}
                            findOfferById={this.props.findOfferById}
                            findQuestionById={this.props.findQuestionById}
                            findEventById={this.props.findEventById}
                        />
                    ) : (
                        <RestaurantGrid
                            restaurants={userInfo.restaurants}
                            buyer={buyer}
                            owner={owner}
                            history={history}
                            preventButtonAction={preventButtonAction}
                            buyerProfile={true}
                        />
                    )
                }
            </div>
        );
    }
}

export default Profile;