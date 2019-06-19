import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Buyer from './buyer/Buyer';
import Owner from './owner/Owner';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        const { buyerProfile, userId } = this.props;
        if(buyerProfile) {
            this.props.findBuyerInfoById(userId);
            return;
        }
        this.props.findOwnerInfoById(userId);
    }

    render() {
        const { buyer, owner, userId, userInfo, buyerProfile } = this.props;
        if(owner && owner.userId != userId){
            return <Redirect to='/'/>;
        }
        
        return (
            <div className='col-12 zenzero-profile'>
                <h3><span class="badge badge-success">{userInfo.name}</span></h3>
                {
                    buyerProfile ? (
                        <Buyer
                            offers={userInfo.offers}
                            events={userInfo.events}
                            questions={userInfo.questions}
                            buyer={buyer}
                            owner={owner}
                        />
                    ) : (
                        <Owner
                            restaurants={userInfo.restaurants}
                            buyer={buyer}
                            owner={owner}
                        />
                    )
                }
            </div>
        );
    }
}

export default Profile;