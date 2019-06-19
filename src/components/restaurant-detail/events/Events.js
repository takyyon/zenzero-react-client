import React from 'react';
import './index.scss';

const Events = ({events}) => {
    return (
        <div className='zenzero-restaurant-events'>
            <h3>Events &nbsp;<i className="far fa-arrow-alt-circle-right"></i></h3>
            <div className="row flex-row flex-nowrap">
                {
                    events && events.map((event, index) => {
                        return (
                            <div
                                key={`events-${index}`}
                                className="col-2 text-center zenzero-restaurant-event">
                                <div className="card card-block">
                                    {event.title}
                                </div>
                            </div>
                        );
                    })
                }
                {
                    (!events || events.length == 0) && (
                        <h6 className='col-2 text-center'>No Events found.</h6>
                    )
                }
            </div>
        </div>
    );
}

export default Events;