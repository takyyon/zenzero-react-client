import React, { Component } from 'react';
import './../index.scss';

class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        if(e.target.id == 'text') {
            this.setState({
                text: e.target.value
            });
        }
    }

    handleSubmit(e) {
        this.props.addQuestion(e, this.state.text);
    }

    render() {
        const { handleClose } = this.props;
        return (
            <div className='zenzero-question-modal'>
                <div className="modal fade show" id="exampleModalLong" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    Need an Answer?
                                </h4>
                                <i className="fas fa-times zenzero-close-modal"
                                    onClick={(e) => handleClose(e)}></i>
                            </div>
                            <div className="modal-body">
                                
                                
                                <div className='form-group'>
                                    <textarea
                                        className='form-control zenzero-input-text'
                                        id='text'
                                        rows='3'
                                        placeholder="Your Question"
                                        onChange={this.handleOnChange}
                                    >  
                                    </textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                    className="btn btn-success zenzero-button"
                                    onClick={(e) => this.handleSubmit(e)}
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditModal;