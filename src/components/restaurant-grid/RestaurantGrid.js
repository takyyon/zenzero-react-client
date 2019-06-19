import React, { Component } from 'react';
import './index.scss';
import RestaurantCard from './RestaurantCard';

class RestaurantGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }; 
        this.openRestaurant = this.openRestaurant.bind(this);
    }

    openRestaurant(e, id) {
        this.props.preventButtonAction(e);
        this.props.history.push(`/restaurant/${id}`);
    }

    
    render() {
        const  { restaurants, term, location } = this.props;

        return (
            
            <div className='col-12 zenzero-restaurant-grid'>
                <div className='row'>
                    {
                        term && (
                            <span className="badge badge-warning">
                                {`Term: ${term == '' ? 'NA': term}`}
                            </span>
                        )
                    }
                    {
                        location && (
                            <span className="badge badge-success">
                                {`Location: ${location}`}
                            </span>
                        )
                    }
                </div>
                <div className='row zenzero-grid'>
                    {
                        restaurants && restaurants.map((restaurant, index) => {
                            return (
                                <RestaurantCard
                                    preventButtonAction={this.props.preventButtonAction}
                                    restaurant={restaurant}
                                    key={`restaurant-${index}`}
                                    openRestaurant={this.openRestaurant}
                                />);
                        })
                    }
                    {
                        (!restaurants || (restaurants && restaurants.length == 0)) && (
                            <span className='zenzero-message'>No Restaurants Found for your search</span>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default RestaurantGrid;