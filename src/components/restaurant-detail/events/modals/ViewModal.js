import React from 'react';
import './../index.scss';

const ViewModal = ({ event, handleClose, toggleEditAddModal,
        deleteEvent, user, openRestaurant, likeEvent, profilePage, isEventLiked }) => {
    return (
        <div className='zenzero-event-modal'>
            <div className="modal fade show" id="exampleModalLong" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                {event.title}
                                &nbsp;
                                {user && user.type == 'buyer' && (
                                    <i class={`fas fa-star zenzero-${isEventLiked(event.likedBy)?'highlight':'non-highlight'}`}
                                        onClick={(e) => {
                                            likeEvent && likeEvent(e, isEventLiked(event.likedBy), event._id)
                                        }}
                                    ></i>
                                )}
                            </h4>
                            <i className="fas fa-times zenzero-close-modal"
                                onClick={(e) => handleClose(e)}></i>
                        </div>
                        <div className="modal-body">
                            <div className='form-group'>
                                <span
                                    className="badge badge-dark"
                                    onClick={(e) => openRestaurant(e, event.restaurant._id)}
                                >{event.restaurant.name}</span>
                            </div>
                            <div className='form-group'>
                                <ul className='zenzero-list'>
                                    {
                                        event.text && event.text.split('\n').map((item, index) => 
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
                                <span class="badge badge-success">{event.start}</span>
                                &nbsp;<span class="badge badge-danger">{event.end}</span>
                            </div>
                            <div className='col-6 text-right'>
                                {
                                    user && user.type == 'owner' && 
                                        event.restaurant.user == user.id && (
                                        <h3>
                                            <i
                                                class="fas fa-edit"
                                                onClick={(e) => toggleEditAddModal(e, true)}
                                            ></i>&nbsp;
                                            <i
                                                class="fas fa-trash-alt"
                                                onClick={(e) => deleteEvent(e)}
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