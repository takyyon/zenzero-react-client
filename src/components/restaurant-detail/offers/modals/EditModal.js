import React, { Component } from 'react';
import './../index.scss';

class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            code: '',
            text: '',
            start: '',
            end: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const { code, text, start, end } = this.state;
        this.props.editOffer(e, this.props.add, code, text, start, end);
    }
    
    handleOnChange(e){
        if(!e || !e.target){
            return;
        }
        if(e.target.id == 'code') {
            this.setState({
                code: e.target.value
            });
        }
        if(e.target.id == 'text') {
            this.setState({
                text: e.target.value
            });
        }
        if(e.target.id == 'start') {
            this.setState({
                start: e.target.value
            });
        }
        if(e.target.id == 'end') {
            this.setState({
                end: e.target.value
            });
        }

    }

    render() {
        const { offer, handleClose, add } = this.props;
        return (
            <div className='zenzero-offer-modal'>
                <div className="modal fade show" id="exampleModalLong" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    { !add && offer ? offer.code : 'Add New Offer'}
                                </h4>
                                <i className="fas fa-times zenzero-close-modal"
                                    onClick={(e) => handleClose(e)}></i>
                            </div>
                            <div className="modal-body">
                                {!add && offer && (
                                    <div className='form-group'>
                                        <span className="badge badge-dark">{offer.restaurant.name}</span>
                                    </div>
                                )}
                                
                                <div className='form-group'>
                                    <input type='text'
                                        className='form-control zenzero-input-text'
                                        defaultValue={!add && offer ? offer.code: ''}
                                        id='code'
                                        placeholder="Offer Code"
                                        onChange={this.handleOnChange}
                                        />
                                </div>
                                <div className='form-group'>
                                    <textarea
                                        className='form-control zenzero-input-text'
                                        id='text'
                                        rows='3'
                                        onChange={this.handleOnChange}
                                        placeholder={!add && offer ? offer.text: 'Sample Point 1\nSample Point 2'}
                                    >
                                    </textarea>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='start'>
                                        Start Date
                                    </label>
                                    <input type='date'
                                        className='form-control zenzero-input-text'
                                        defaultValue={!add && offer ? offer.start: ''}
                                        id='start'
                                        name='start'
                                        placeholder="Event Start Date"
                                        onChange={this.handleOnChange}
                                        />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='end'>
                                        End Date
                                    </label>
                                    <input type='date'
                                        className='form-control zenzero-input-text'
                                        defaultValue={!add && offer ? offer.end: ''}
                                        id='end'
                                        name='end'
                                        placeholder="Event End Date"
                                        onChange={this.handleOnChange}
                                        />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-success zenzero-button"
                                        onClick={(e) => this.handleSubmit(e)}
                                    >
                                        {add ? 'Add': 'Edit'}
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