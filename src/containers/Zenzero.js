import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../components/Home';

class Zenzero extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Router>
                <Route exact path='/' 
                    render={() => 
                        <Home />
                    }/>
            </Router>
        );
    }
}

export default Zenzero;