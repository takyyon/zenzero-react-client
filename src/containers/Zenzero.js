import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './../components/Home';
import Header from './../components/header/Header';
import './index.scss';
import LoginSignup from '../components/login-signup/LoginSignup';
import RestaurantGrid from '../components/restaurant-grid/RestaurantGrid';
import Restaurant from './Restaurant';
import Profile from './../containers/Profile';
import Account from '../components/account/Account';

class Zenzero extends Component {
    constructor(props){
        super(props);
        this.state = {
            hideRightMenu: false,
            showLoginPopup: false,
            term: '',
            location: '',
            search: false
        };
        this.toggleHideRightMenu = this.toggleHideRightMenu.bind(this);
        this.toggleLoginPopup = this.toggleLoginPopup.bind(this);
        this.loginOrSignup = this.loginOrSignup.bind(this);
        this.findRestaurants = this.findRestaurants.bind(this);
        this.preventButtonAction = this.preventButtonAction.bind(this);
        this.becomeOwner = this.becomeOwner.bind(this);
        this.deRegister = this.deRegister.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.registerUserAsSecondType = this.registerUserAsSecondType.bind(this);
        this.switchUser = this.switchUser.bind(this);
        this.logout = this.logout.bind(this);
        this.props.fetchUserInSession();
    }

    componentDidMount() {
        this.props.fetchUserInSession();
    }

    updateUser(newUser) {
        this.props.updateUser(newUser);
    }

    registerUserAsSecondType(e) {
        this.preventButtonAction(e);
        this.props.registerUserAsSecondType(this.props.user.type == 'owner' ? 'buyer': 'owner');
    }

    switchUser(e) {
        this.preventButtonAction(e);
        this.props.switchUser();
    }

    logout(e) {
        this.preventButtonAction(e);
        this.props.logout();
    }

    becomeOwner(e, id) {
        this.preventButtonAction(e);
        /**
         * TODO: Own a restaurant
         */
        this.props.ownRestaurant(id, this.state.term, this.state.location);
    }

    deRegister(e, id) {
        this.preventButtonAction(e);

        this.props.deRegister(id, this.state.term, this.state.location);
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
        
        if(login) {
            if(buyer){
                this.props.loginBuyer(email, password);
                return;
            }
            this.props.loginOwner(email, password);
            return;
        }
        if(this.buyer) {
            this.props.registerBuyer(name, email, password);
            return;
        }
        this.props.registerOwner(name, email, password);
    }

    toggleHideRightMenu(flag=false) {
        this.setState({
            hideRightMenu: flag
        });
    }

    findRestaurants(term, location){
        this.setState({
            term: term,
            location: location ? location: 'Boston, MA',
            search: true
        });
        /**
         * Search all restaurants according to the term/location
         */
        this.props.findRestaurantsByTermLocation(term, location);
    }

    toggleLoginPopup(e, flag=false) {
        this.preventButtonAction(e);
        this.setState({
            showLoginPopup: flag
        });
    }

    render() {
        const { hideRightMenu, showLoginPopup, term, location } = this.state;
        const { user, restaurants } = this.props;
        if(this.state.search) {
            this.setState({
                search: false
            }, () => {
                return <Redirect to='/'></Redirect>
            });
        }

        return (
            <Router>
                <div className='zenzero-container' onClick={() => this.toggleHideRightMenu(true)}>
                    <Header
                        hideRightMenu={hideRightMenu}
                        toogleHideRightMenu={this.toggleHideRightMenu}
                        toggleLoginPopup={this.toggleLoginPopup}
                        user={user}
                        findRestaurants={this.findRestaurants}
                        preventButtonAction={this.preventButtonAction}
                        switchUser={this.switchUser}
                        logout={this.logout}
                    />
                    <div className='row zenzero-body'>
                        
                        <Route exact path='/' 
                            render={(props) => 
                                <RestaurantGrid
                                    preventButtonAction={this.preventButtonAction}
                                    restaurants={restaurants}
                                    history={props.history}
                                    term={term}
                                    location={location}
                                    user={user}
                                    becomeOwner={this.becomeOwner}
                                    deRegister={this.deRegister}
                                />
                            }/>
                        <Route exact path='/restaurant/:restaurantId'
                            render={(props) =>
                                <Restaurant
                                    preventButtonAction={this.preventButtonAction}
                                    history={props.history}
                                    restaurantId={props.match.params.restaurantId}
                                    user={user}
                                />
                            }
                        />
                        <Route exact path='/buyer/:userId'
                            render={(props) =>
                                <Profile
                                    preventButtonAction={this.preventButtonAction}
                                    userId={props.match.params.userId}
                                    history={props.history}
                                    user={user}
                                    buyer={true}
                                />
                            }
                        />
                        <Route exact path='/owner/:userId'
                            render={(props) =>
                                <Profile
                                    preventButtonAction={this.preventButtonAction}
                                    userId={props.match.params.userId}
                                    history={props.history}
                                    user={user}
                                    buyer={false}
                                />
                            }
                        />
                        <Route exact path='/edit-account'
                            render={(props) => 
                                <Account
                                    preventButtonAction={this.preventButtonAction}
                                    user={user}
                                    updateUser={this.updateUser}
                                    registerUserAsSecondType={this.registerUserAsSecondType}
                                    switchUser={this.switchUser}
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