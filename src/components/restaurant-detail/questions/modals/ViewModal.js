import React, { Component } from 'react';
import './../index.scss';

class ViewModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        if(e.target.id == 'comment') {
            this.setState({
                comment: e.target.value
            });
        }
    }

    handleSubmit(e) {
        this.props.addComment(e, this.state.comment);
        this.setState({
            comment: ''
        });
    }

    render() {
        const { question, handleClose, user, openRestaurant, openBuyer, restaurant } = this.props;
        return (
            <div className='zenzero-question-modal'>
                <div className="modal fade show" id="exampleModalLong" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    Buyer Question
                                </h4>
                                <i className="fas fa-times zenzero-close-modal"
                                    onClick={(e) => handleClose(e)}></i>
                            </div>
                            <div className="modal-body">
                                <div className='form-group'>
                                    <span
                                        className="badge badge-dark"
                                        onClick={(e) => openRestaurant(e, question.restaurant._id)}
                                    >{question.restaurant.name}</span>
                                    &nbsp; &nbsp;
                                    <span
                                        className="badge badge-warning"
                                        onClick={(e) => openBuyer(e, question.user._id)}
                                    >{`Posted By: ${question.user.name}`}</span>
                                </div>
                                <p>{question.text}</p>
                                <div className='form-group'>
                                    <ul className='list-group zenzero-question-comment'>
                                        {
                                            question.text && question.comments.map((comment, index) => 
                                                <li
                                                    className='list-group-item'
                                                    key={`event-item-${index}`}
                                                >
                                                    {comment.text}
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            {
                                user && user.type == 'owner' && 
                                    (!restaurant ||
                                        (restaurant && restaurant.user &&
                                            restaurant.user._id == user.id)) && (
                                    <div className="modal-footer">        
                                        <div className='col-9 text-left'>
                                            <textarea
                                                className='form-control zenzero-input-text'
                                                id='comment'
                                                rows='2'
                                                placeholder="Owner's Comment"
                                                onChange={this.handleOnChange}
                                                value={this.state.comment}
                                            >
                                            </textarea>
                                        </div>
                                        <div className='col-3 text-right'>
                                            <button type="button"
                                                className="btn btn-success zenzero-button"
                                                onClick={(e) => this.handleSubmit(e)}
                                            >
                                                Comment
                                            </button>
                                        </div>   
                                    </div>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewModal;