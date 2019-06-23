import React from 'react';
import './index.scss';
import ViewModal from './modals/ViewModal';
import EditModal from './modals/EditModal';

const Questions = ({ questions, toggleModal, toggleEditAddModal, selected, openBuyer, restaurant,
        showModal, user, add, addQuestion, addComment, profilePage, openRestaurant }) => {
    return (
        <div className='zenzero-restaurant-questions'>
            <h3>Questions &nbsp; <i className="far fa-arrow-alt-circle-down"></i></h3>
            {
                (profilePage == null) && (!user || 
                    (user && user.type == 'buyer')) && (
                    <span 
                        className="badge badge-secondary"
                        onClick={(e) => {
                            toggleModal(e);
                            toggleEditAddModal(e, false, true);
                        }}
                    >
                        <i className="fas fa-plus-circle"></i>
                        &nbsp;New Question
                    </span>
                )
            }
            {
                questions && questions.map((question, index) => {
                    
                    return (
                        <div
                            key={`questions-${index}`}
                            className="row zenzero-restaurant-question"
                            onClick={(e) => toggleModal(e, question._id)}>
                            <div className="card card-block">
                                {question.text}
                            </div>
                        </div>
                    );
                })
            }
            {
                (!questions || questions.length == 0) && (
                    <h6>No Questions found.</h6>
                )
            }
            {
                showModal && (add || (!add && selected)) && (
                    (add) ? (
                        <EditModal
                            handleClose={toggleModal}
                            add={add}
                            addQuestion={addQuestion}
                        />
                    ): (
                        <ViewModal
                            question={selected}
                            handleClose={toggleModal}
                            addComment={addComment}
                            user={user}
                            restaurant={restaurant}
                            openRestaurant={openRestaurant}
                            openBuyer={openBuyer}
                        />
                    )
                )
            }
        </div>
    );
}

export default Questions;