import React from 'react';
import './index.scss';
import ViewModal from './modals/ViewModal';
import EditModal from './modals/EditModal';

const Offers = ({offers, toggleModal, toggleEditAddModal, selected, showModal, 
    buyer, owner, add, edit, deleteOffer, editOffer, openRestaurant  }) => {
    return (
        <div className='zenzero-restaurant-offers'>
            <h3>Offers &nbsp;<i className="far fa-arrow-alt-circle-right"></i></h3>
            {
                owner && (
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
                                onClick={(e) => toggleModal(e, offer.id)}>
                                <div className="card card-block">
                                    {offer.title}
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
                showModal && (
                    (edit || add) ? (
                        <EditModal
                            offer={selected}
                            handleClose={toggleModal}
                            add={add}
                            editOffer={editOffer}
                        />
                    ): (
                        <ViewModal
                            offer={selected}
                            handleClose={toggleModal}
                            toggleEditAddModal={toggleEditAddModal}
                            deleteOffer={deleteOffer}
                            buyer={buyer}
                            owner={owner}
                            openRestaurant={openRestaurant}
                        />
                    )
                )
            }
        </div>
    );
}

export default Offers;