import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../components/Home';
import Header from './../components/header/Header';
import './index.scss';

class Zenzero extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className='zenzero-container'>
                <Header />
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