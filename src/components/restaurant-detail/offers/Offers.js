import React from 'react';
import './index.scss';

const Offers = ({offers}) => {
    return (
        <div className='zenzero-restaurant-offers'>
            <h3>Offers &nbsp;<i className="far fa-arrow-alt-circle-right"></i></h3>
            <div className="row flex-row flex-nowrap">
                {
                    offers && offers.map((offer, index) => {
                        return (
                            <div
                                key={`offers-${index}`}
                                className="col-2 text-center zenzero-restaurant-offer">
                                <div className="card card-block">
                                    {offer.title}
                                </div>
                            </div>
                        );
                    })
                }
                {
                    (!offers || offers.length == 0) && (
                        <h6>No Offers found.</h6>
                    )
                }
            </div>
        </div>
    );
}

export default Offers;