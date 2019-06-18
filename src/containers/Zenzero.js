import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../components/Home';
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
                <div className='row zenzero-header'>
                    <div className='col-3'>

                    </div>
                    <div className='col-6'>
                        <div className="input-group mb-3 zenzero-search">
                            <input type="text" className="form-control" placeholder="Search Restaurant" aria-label="Search Restaurant" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <span className='dropdown'>
                            <a className='dropdown-toggle'>
                                <i className="fas fa-user-circle"></i>
                            </a>
                        </span>
                        
                    </div>
                </div>
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