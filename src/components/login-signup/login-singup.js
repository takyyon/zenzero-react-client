import React, { Component } from 'react';
import './index.scss';

class LoginSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: true
        };
        this.handleClose = this.handleClose.bind(this);
        this.toggleLoginState = this.toggleLoginState.bind(this);
    }

    handleClose(e){
        if(e){
            e.preventDefault();
            e.stopPropagation();
        }
        this.props.close();
    }

    toggleLoginState(login=false){
        this.setState({
            login: login
        });
    }

    render() {
        const { login } = this.state;
        return (
            <div className='zenzero-login-signup-modal'>
                <div className="modal fade show" id="exampleModalLong" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create New Widget</h5>
                            <i className="fas fa-times zenzero-close-modal"
                                onClick={this.handleClose}></i>
                        </div>
                        <div className="modal-body">
                            
                            
                            <div className='form-group'>
                                
                            </div>
                        </div>
                            <div className="modal-footer">
                                {
                                    login ? (
                                        <span
                                            className='zenzero-footer-msg'
                                            onClick={() => this.toggleLoginState()}
                                            > (Register Now?)</span>
                                    ) : (
                                        <span
                                            className='zenzero-footer-msg'
                                            onClick={() => this.toggleLoginState(true)}
                                            > (Already a Member? Login Here!)</span>
                                    )
                                }
                                <button type="button"
                                    className="btn btn-success zenzero-button"
                                >
                                    {`${login? 'Login': 'Signup'}`}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginSignup;