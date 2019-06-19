import React, { Component } from 'react';
import './index.scss';
import Restaurant from '../../restaurant-detail/Restaurant';


class Owner extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount(){

    }

    render() {
        const { restaurant, preventButtonAction, history } = this.props;
        return (
            <Restaurant
                restaurant={restaurant}
                preventButtonAction={preventButtonAction}
                history={history}
            />
        );
    }
}

export default Owner;