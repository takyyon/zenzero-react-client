import React from 'react';
import './index.scss';

const Questions = ({questions}) => {
    return (
        <div className='zenzero-restaurant-questions'>
            <h3>Questions &nbsp; <i className="far fa-arrow-alt-circle-down"></i></h3>
            <span className="badge badge-secondary">
                <i className="fas fa-plus-circle"></i>
                &nbsp;New Question
            </span>
            {
                questions && questions.map((question, index) => {
                    return (
                        <div
                            key={`questions-${index}`}
                            className="row zenzero-restaurant-question">
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
        </div>
    );
}

export default Questions;