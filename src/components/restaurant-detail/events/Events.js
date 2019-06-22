import React from 'react';
import './index.scss';
import ViewModal from './modals/ViewModal';
import EditModal from './modals/EditModal';

const Events = ({ events, toggleModal, toggleEditAddModal,
    selected, showModal, user, add, edit, deleteEvent, restaurant,
    editEvent, openRestaurant, likeEvent, profilePage }) => {
    return (
        <div className='zenzero-restaurant-events'>
            <h3>Events &nbsp;<i className="far fa-arrow-alt-circle-right"></i></h3>
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
                        &nbsp;New Event
                    </span>
                )
            }
            <div className="row flex-row flex-nowrap">
                {
                    events && events.map((event, index) => {
                        return (
                            <div
                                key={`events-${index}`}
                                className="col-2 text-center zenzero-restaurant-event"
                                onClick={(e) => toggleModal(e, event._id)}>
                                <div className="card card-block">
                                    {event.title}
                                </div>
                            </div>
                        );
                    })
                }
                {
                    (!events || events.length == 0) && (
                        <h6 className='col-3 text-center'>No Events found.</h6>
                    )
                }
            </div>
            {
                showModal && (add || (!add && selected)) && (
                    (edit || add) ? (
                        <EditModal
                            event={selected}
                            handleClose={toggleModal}
                            add={add}
                            editEvent={editEvent}
                        />
                    ): (
                        <ViewModal
                            profilePage={profilePage}
                            event={selected}
                            handleClose={toggleModal}
                            toggleEditAddModal={toggleEditAddModal}
                            deleteEvent={deleteEvent}
                            user={user}
                            openRestaurant={openRestaurant}
                            likeEvent={likeEvent}
                        />
                    )
                )
            }
        </div>
    );
}

export default Events;