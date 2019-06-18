import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../components/Home';
import Header from './../components/header/Header';
import './index.scss';
import LoginSignup from '../components/login-signup/login-singup';

class Zenzero extends Component {
    constructor(props){
        super(props);
        this.state = {
            hideRightMenu: false,
            showLoginPopup: false
        };
        this.toggleHideRightMenu = this.toggleHideRightMenu.bind(this);
        this.toggleLoginPopup = this.toggleLoginPopup.bind(this);
    }

    toggleHideRightMenu(flag=false) {
        this.setState({
            hideRightMenu: flag
        });
    }

    toggleLoginPopup(flag=false) {
        this.setState({
            showLoginPopup: flag
        });
    }

    render() {
        const { hideRightMenu, showLoginPopup } = this.state;
        const { buyer, owner } = this.props;

        return (
            <div className='zenzero-container' onClick={() => this.toggleHideRightMenu(true)}>
                <Header
                    hideRightMenu={hideRightMenu}
                    toogleHideRightMenu={this.toggleHideRightMenu}
                    toggleLoginPopup={this.toggleLoginPopup}
                    buyer={buyer}
                    owner={owner}
                />
                <div className='row zenzero-body'>
                    <Router>
                        <Route exact path='/' 
                            render={() => 
                                <Home />
                            }/>
                    </Router>
                </div>
                <div className='row zenzero-footer'>

                </div>
                <div className='zenzero-global-popups'>
                    {showLoginPopup && (
                        <LoginSignup
                            close={this.toggleLoginPopup}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Zenzero;