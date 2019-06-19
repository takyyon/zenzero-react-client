import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../components/Home';
import Header from './../components/header/Header';
import './index.scss';
import LoginSignup from '../components/login-signup/LoginSignup';
import RestaurantGrid from '../components/restaurant-grid/RestaurantGrid';
import Restaurant from './Restaurant';
import Profile from './../containers/Profile';

class Zenzero extends Component {
    constructor(props){
        super(props);
        this.state = {
            hideRightMenu: false,
            showLoginPopup: false,
            term: '',
            location: 'Boston, MA'
        };
        this.toggleHideRightMenu = this.toggleHideRightMenu.bind(this);
        this.toggleLoginPopup = this.toggleLoginPopup.bind(this);
        this.loginOrSignup = this.loginOrSignup.bind(this);
        this.findRestaurants = this.findRestaurants.bind(this);
        this.preventButtonAction = this.preventButtonAction.bind(this);
    }

    preventButtonAction(e) {
        if(e){
            e.preventDefault();
            e.stopPropagation();
        }
    }

    loginOrSignup(email, password, buyer, name='', login=true) {
        /**
         * Signup or Login here
         */
    }

    toggleHideRightMenu(flag=false) {
        this.setState({
            hideRightMenu: flag
        });
    }

    findRestaurants(term, location){
        this.setState({
            term: term,
            location: location
        });
        /**
         * Search all restaurants according to the term/location
         */
    }

    toggleLoginPopup(flag=false) {
        this.setState({
            showLoginPopup: flag
        });
    }

    render() {
        const { hideRightMenu, showLoginPopup, term, location } = this.state;
        const { buyer, owner, restaurants } = this.props;

        return (
            <Router>
                <div className='zenzero-container' onClick={() => this.toggleHideRightMenu(true)}>
                    <Header
                        hideRightMenu={hideRightMenu}
                        toogleHideRightMenu={this.toggleHideRightMenu}
                        toggleLoginPopup={this.toggleLoginPopup}
                        buyer={buyer}
                        owner={owner}
                        findRestaurants={this.findRestaurants}
                        preventButtonAction={this.preventButtonAction}
                    />
                    <div className='row zenzero-body'>
                        
                        <Route exact path='/' 
                            render={() => 
                                <RestaurantGrid
                                    restaurants={restaurants}
                                    term={term}
                                    location={location}
                                />
                            }/>
                        <Route exact path='/restaurant/:restaurantId'
                            render={(props) =>
                                <Restaurant
                                    preventButtonAction={this.preventButtonAction}
                                    history={props.history}
                                    restaurantId={props.match.params.restaurantId}
                                    buyer={buyer}
                                    owner={owner}
                                />
                            }
                        />
                        <Route exact path='/buyer/:userId'
                            render={(props) =>
                                <Profile
                                    preventButtonAction={this.preventButtonAction}
                                    userId={props.match.params.userId}
                                    history={props.history}
                                    buyer={buyer}
                                    owner={owner}
                                    buyerProfile={true}
                                />
                            }
                        />
                        <Route exact path='/owner/:userId'
                            render={(props) =>
                                <Profile
                                    preventButtonAction={this.preventButtonAction}
                                    userId={props.match.params.userId}
                                    history={props.history}
                                    buyer={buyer}
                                    owner={owner}
                                    buyerProfile={false}
                                />
                            }
                        />
                    </div>
                    <div className='row zenzero-footer'>

                    </div>
                    <div className='zenzero-global-popups'>
                        {showLoginPopup && (
                            <LoginSignup
                                close={this.toggleLoginPopup}
                                handleSubmit={this.loginOrSignup}
                            />
                        )}
                    </div>
                    {
                        showLoginPopup && (
                            <div className='zenzero-mask'>
                                &nbsp;
                            </div>
                        )
                    }
                </div>
            </Router>
        );
    }
}

export default Zenzero;