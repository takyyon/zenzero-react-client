import React from 'react';
import './../index.scss';

const ViewModal = ({ offer, handleClose, toggleEditAddModal,
        deleteOffer, buyer, owner, openRestaurant, likOffer, profilePage }) => {
    return (
        <div className='zenzero-offer-modal'>
            <div className="modal fade show" id="exampleModalLong" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                {offer.code}
                                &nbsp;
                                {buyer && !profilePage && (
                                    <i class={`fas fa-star ${offer.star?'zenzero-highlight':''}`}
                                        onClick={(e) => likOffer && likOffer(e, offer.id)}
                                    ></i>)}
                            </h4>
                            <i className="fas fa-times zenzero-close-modal"
                                onClick={(e) => handleClose(e)}></i>
                        </div>
                        <div className="modal-body">
                            <div className='form-group'>
                                <span
                                    className="badge badge-dark"
                                    onClick={(e) => openRestaurant(e, offer.restaurant.id)}
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
                                    owner && (
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