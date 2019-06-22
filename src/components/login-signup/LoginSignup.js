import React, { Component } from 'react';
import './index.scss';

class LoginSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: true,
            email: '',
            name: '',
            password: '',
            buyer: true
        };
        this.toggleLoginState = this.toggleLoginState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        if(!e || !e.target){
            return;
        }
        if(e.target.id == 'email') {
            this.setState({
                email: e.target.value
            });
        }
        if(e.target.id == 'name') {
            this.setState({
                name: e.target.value
            });
        }
        if(e.target.id == 'password') {
            this.setState({
                password: e.target.value
            });
        }
        if(e.target.id == 'buyer') {
            this.setState({
                buyer: true
            });
        }
        if(e.target.id == 'owner') {
            this.setState({
                buyer: false
            });
        }
    }

    handleSubmit(e) {
        const { email, name, password, buyer, login} = this.state;
        this.props.handleSubmit(email, password, buyer, name, login);
        this.props.close(e);
    }

    toggleLoginState(e, login=false){
        if(e){
            e.preventDefault();
            e.stopPropagation();
        }
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
                            <h5 className="modal-title">{`${login? 'Welcome To Zenzero': 'Become a part of Zenzero Family'}`}</h5>
                            <i className="fas fa-times zenzero-close-modal"
                                onClick={(e) => this.props.close(e)}></i>
                        </div>
                        <div className="modal-body">
                            {
                                !login &&  (
                                        <div className='form-group'>
                                            <input type='text'
                                                className='form-control zenzero-input-text'
                                                id='name'
                                                placeholder="Full Name"
                                                onChange={this.handleOnChange}
                                                />
                                        </div>
                                )
                            }
                            <div className='form-group'>
                                <input type='text'
                                    className='form-control zenzero-input-text'
                                    id='email'
                                    placeholder="Email Address"
                                    onChange={this.handleOnChange}
                                    />
                            </div>
                            <div className='form-group'>
                                <input type='password'
                                    className='form-control zenzero-input-text'
                                    id='password'
                                    placeholder="Your Password"
                                    onChange={this.handleOnChange}
                                    />
                            </div>
                            <div className='form-group'>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input defaultChecked={true}
                                        type="radio"
                                        id="buyer"
                                        onChange={this.handleOnChange}
                                        name="user-role"
                                        className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="buyer">Buyer</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input
                                        type="radio"
                                        id="owner"
                                        onChange={this.handleOnChange}
                                        name="user-role"
                                        className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="owner">Owner</label>
                                </div>
                            </div>
                            
                        </div>
                            <div className="modal-footer">
                                {
                                    login ? (
                                        <span
                                            className='zenzero-footer-msg'
                                            onClick={(e) => this.toggleLoginState(e)}
                                            > (Register Now?)</span>
                                    ) : (
                                        <span
                                            className='zenzero-footer-msg'
                                            onClick={(e) => this.toggleLoginState(e, true)}
                                            > (Already a Member? Login Here!)</span>
                                    )
                                }
                                <button type="button"
                                    className="btn btn-success zenzero-button"
                                    onClick={(e) => this.handleSubmit(e)}
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