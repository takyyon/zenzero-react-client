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
        const  { restaurants, term, location } = this.props;

        return (
            <div className='zenzero-restaurant-grid'>
                <div className='row'>
                    <span className="badge badge-warning">{`Term: ${term == '' ? 'NA': term}`}</span>
                    <span className="badge badge-success">{`Location: ${location}`}</span>
                </div>
                <div className='row zenzero-grid'>
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
                            <span className='zenzero-message'>No Restaurants Found for your search</span>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default RestaurantGrid;