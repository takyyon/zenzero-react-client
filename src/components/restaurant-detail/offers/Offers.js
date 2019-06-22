import React from 'react';
import './index.scss';
import ViewModal from './modals/ViewModal';
import EditModal from './modals/EditModal';

const Offers = ({offers, toggleModal, toggleEditAddModal, selected, showModal, restaurant,
    user, add, edit, deleteOffer, editOffer, openRestaurant, likOffer, profilePage  }) => {
    return (
        <div className='zenzero-restaurant-offers'>
            <h3>Offers &nbsp;<i className="far fa-arrow-alt-circle-right"></i></h3>
            {
                user && user.type == 'owner' && restaurant.user &&
                    (restaurant.user._id == user.id) && (
                    <span
                        className="badge badge-secondary"
                        onClick={(e) => {
                            toggleModal(e);
                            toggleEditAddModal(e, false, true);
                        }}
                    >
                        <i className="fas fa-plus-circle"></i>
                        &nbsp;New Offer
                    </span>
                )
            }
            <div className="row flex-row flex-nowrap">
                {
                    offers && offers.map((offer, index) => {
                        
                        return (
                            <div
                                key={`offers-${index}`}
                                className="col-2 text-center zenzero-restaurant-offer"
                                onClick={(e) => toggleModal(e, offer._id)}>
                                <div className="card card-block">
                                    {offer.code}
                                </div>
                            </div>
                        );
                    })
                }
                {
                    (!offers || offers.length == 0) && (
                        <h6 className='col-3 text-center'>No Offers found.</h6>
                    )
                }
            </div>
            {
                showModal && (add || (!add && selected)) && (
                    (edit || add) ? (
                        <EditModal
                            offer={selected}
                            handleClose={toggleModal}
                            add={add}
                            editOffer={editOffer}
                        />
                    ): (
                        <ViewModal
                            profilePage={profilePage}
                            offer={selected}
                            handleClose={toggleModal}
                            toggleEditAddModal={toggleEditAddModal}
                            deleteOffer={deleteOffer}
                            user={user}
                            openRestaurant={openRestaurant}
                            likOffer={likOffer}
                        />
                    )
                )
            }
        </div>
    );
}

export default Offers;