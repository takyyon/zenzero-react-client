import React from 'react';
import './index.scss';
import ViewModal from './modals/ViewModal';
import EditModal from './modals/EditModal';

const Questions = ({ questions, toggleModal, toggleEditAddModal, selected,
        showModal, buyer, owner, add, addQuestion, addComment, profilePage }) => {
    return (
        <div className='zenzero-restaurant-questions'>
            <h3>Questions &nbsp; <i className="far fa-arrow-alt-circle-down"></i></h3>
            {
                (profilePage == null) && buyer && (
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
                            onClick={(e) => toggleModal(e, question.id)}>
                            <div className="card card-block">
                                {question.title}
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
                showModal && (
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
                            buyer={buyer}
                            owner={owner}
                        />
                    )
                )
            }
        </div>
    );
}

export default Questions;