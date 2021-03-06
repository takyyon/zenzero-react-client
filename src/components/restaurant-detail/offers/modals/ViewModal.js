import React from 'react';
import './../index.scss';

const ViewModal = ({ offer, handleClose, toggleEditAddModal,
        deleteOffer, user, openRestaurant, likOffer, profilePage, isOfferLiked }) => {
    return (
        <div className='zenzero-offer-modal'>
            <div className="modal fade show" id="exampleModalLong" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                {offer.code}
                                &nbsp;
                                {user && user.type == 'buyer' && (
                                    <i class={`fas fa-star zenzero-${isOfferLiked(offer.likedBy)?'highlight':'non-highlight'}`}
                                        onClick={(e) => likOffer && likOffer(e, isOfferLiked(offer.likedBy), offer._id)}
                                    ></i>)}
                            </h4>
                            <i className="fas fa-times zenzero-close-modal"
                                onClick={(e) => handleClose(e)}></i>
                        </div>
                        <div className="modal-body">
                            <div className='form-group'>
                                <span
                                    className="badge badge-dark"
                                    onClick={(e) => openRestaurant(e, offer.restaurant._id)}
                                >{offer.restaurant.name}</span>
                            </div>
                            <div className='form-group'>
                                <ul className='zenzero-list'>
                                    {
                                        offer.text && offer.text.split('\n').map((item, index) => 
                                            <li
                                                key={`event-item-${index}`}
                                            >
                                                {item}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className='col-6 text-left'>
                                <span class="badge badge-success">{offer.start}</span>
                                &nbsp;<span class="badge badge-danger">{offer.end}</span>
                            </div>
                            <div className='col-6 text-right'>
                                {
                                    user && user.type == 'owner' &&
                                        offer.restaurant.user == user.id && (
                                        <h3>
                                            <i
                                                className="fas fa-edit"
                                                onClick={(e) => toggleEditAddModal(e, true)}
                                            ></i>&nbsp;
                                            <i
                                                className="fas fa-trash-alt"
                                                onClick={(e) => deleteOffer(e)}
                                            ></i>
                                        </h3>
                                        
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;