import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../components/Home';
import Header from './../components/header/Header';
import './index.scss';

class Zenzero extends Component {
    constructor(props){
        super(props);
        this.state = {
            hideRightMenu: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.toggleHideRightMenu = this.toggleHideRightMenu.bind(this);
    }

    handleClick() {
        this.toggleHideRightMenu(true);
    }

    toggleHideRightMenu(flag=false) {
        this.setState({
            hideRightMenu: flag
        });
    }

    render() {
        const { hideRightMenu } = this.state;
        const { buyer, owner } = this.props;
        return (
            <div className='zenzero-container' onClick={this.handleClick}>
                <Header
                    hideRightMenu={hideRightMenu}
                    toogleHideRightMenu={this.toggleHideRightMenu}
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
            </div>
        );
    }
}

export default Zenzero;