import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Buyer from './buyer/Buyer';
import Owner from './owner/Owner';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.openBuyer = this.openBuyer.bind(this);
        this.fetchUserData = this.fetchUserData.bind(this);
    }

    openBuyer(id) {
        this.props.history.push(`/buyer/${id}`);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.userId != this.props.userId) {
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
        const { buyer, owner, userId, userInfo, buyerProfile } = this.props;
        if(owner && owner.userId != userId){
            return <Redirect to='/'/>;
        }
        
        return (
            <div className='col-12 zenzero-profile'>
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
                            findOfferById={this.props.findOfferById}
                            findQuestionById={this.props.findQuestionById}
                            findEventById={this.props.findEventById}
                        />
                    ) : (
                        <Owner
                            restaurants={userInfo.restaurants}
                            buyer={buyer}
                            owner={owner}
                            openBuyer={this.openBuyer}
                        />
                    )
                }
            </div>
        );
    }
}

export default Profile;