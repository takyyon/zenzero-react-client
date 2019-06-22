import React, { Component } from 'react';
import './../index.scss';

class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            text: '',
            start: '',
            end: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const { title, text, start, end } = this.state;
        this.props.editEvent(e, this.props.add, title, text, start, end);
    }
    
    handleOnChange(e){
        if(!e || !e.target){
            return;
        }
        if(e.target.id == 'title') {
            this.setState({
                title: e.target.value
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
        const { event, handleClose, add } = this.props;
        return (
            <div className='zenzero-event-modal'>
                <div className="modal fade show" id="exampleModalLong" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    { !add && event ? event.title : 'Add New Event'}
                                </h4>
                                <i className="fas fa-times zenzero-close-modal"
                                    onClick={(e) => handleClose(e)}></i>
                            </div>
                            <div className="modal-body">
                                {!add && event && (
                                    <div className='form-group'>
                                        <span className="badge badge-dark">{event.restaurant.name}</span>
                                    </div>
                                )}
                                
                                <div className='form-group'>
                                    <input type='text'
                                        className='form-control zenzero-input-text'
                                        defaultValue={!add && event ? event.title: ''}
                                        id='title'
                                        placeholder="Event Title"
                                        onChange={this.handleOnChange}
                                        />
                                </div>
                                <div className='form-group'>
                                    <textarea
                                        className='form-control zenzero-input-text'
                                        id='text'
                                        rows='3'
                                        onChange={this.handleOnChange}
                                        placeholder={!add && event ? event.text: 'Sample Point 1\nSample Point 2'}
                                    >
                                        
                                    </textarea>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='start'>
                                        Start Date
                                    </label>
                                    <input type='date'
                                        className='form-control zenzero-input-text'
                                        defaultValue={!add && event ? event.start: ''}
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
                                        defaultValue={!add && event ? event.end: ''}
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