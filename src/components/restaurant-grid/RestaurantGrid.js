import React, { Component } from 'react';
import './index.scss';
import RestaurantCard from './RestaurantCard';

class RestaurantGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }; 
    }

    
    render() {
        const  { restaurants } = this.props;

        return (
            <div className='zenzero-restaurant-grid'>
                {
                    restaurants && restaurants.map((restaurant, index) => {
                        return (
                            <RestaurantCard
                                restaurant={restaurant}
                                key={`restaurant-${index}`}
                            />);
                    })
                }
                {
                    (!restaurants || (restaurants && restaurants.length == 0)) && (
                        <span>No Restaurants Found for your search</span>
                    )
                }
            </div>
        );
    }
}

export default RestaurantGrid;