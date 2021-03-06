import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './index.scss';

class Account extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, target) {
        this.props.preventButtonAction(e);
        const user = this.getUser();
        if(target == 'name'){
            user.name = this.state.name;
        }
        if(target == 'email'){
            user.email = this.state.email;
        }
        if(target == 'password'){
            user.password = this.state.password;
        }
        this.props.updateUser(user);
    }

    
    onChange(e) {
        if(e.target.id == 'name'){
            this.setState({
                name: e.target.value
            });
        }
        if(e.target.id == 'email'){
            this.setState({
                email: e.target.value
            });
        }
        if(e.target.id == 'password'){
            this.setState({
                password: e.target.value
            });
        }
    }

    render() {
        const { user, preventButtonAction } = this.props;
        if(user == null){
            return <Redirect to='/'/>;
        }
        
        return (
            <div className='col-12 zenzero-account'>
                <h3>{`Edit Account (${user.type == 'buyer'?'Buyer': 'Owner'})`}</h3>
                <div className='row zenzero-account-details'>
                    <div className='col-2'></div>
                    <ul className="col-8 list-group">
                        <li className="list-group-item">
                            <div className='row'>
                                <div className='col-10'>
                                    <input type="text"
                                        id='name'
                                        required='required'
                                        defaultValue={user.name}
                                        onChange={this.onChange}
                                        onClick={(e) => this.props.preventButtonAction(e)}
                                        className="form-control zenzero-input-text"
                                        placeholder="User Full-Name"
                                        aria-label="User Full Name"
                                        aria-describedby="basic-addon1" />
                                </div>
                                <div className='col-2 text-right'>
                                    <h4><span
                                        className="badge badge-danger"
                                        onClick={(e) => this.handleSubmit(e, 'name')}>Update</span></h4>
                                </div>
                            </div> 
                        </li>
                        {/** Email */}
                        <li className="list-group-item">
                            <div className='row'>
                                <div className='col-10'>
                                    <input type="text"
                                        id='email'
                                        required='required'
                                        defaultValue={user.email}
                                        onChange={this.onChange}
                                        onClick={(e) => this.props.preventButtonAction(e)}
                                        className="form-control zenzero-input-text"
                                        placeholder="Email Address"
                                        aria-label="Email Address"
                                        aria-describedby="basic-addon1" />
                                </div>
                                <div className='col-2 text-right'>
                                    <h4><span
                                        className="badge badge-danger"
                                        onClick={(e) => this.handleSubmit(e, 'email')}>Update</span></h4>
                                </div>
                            </div> 
                        </li>
                        {/** Password */}
                        <li className="list-group-item">
                            <div className='row'>
                                <div className='col-10'>
                                    <input type="password"
                                        id='password'
                                        required='required'
                                        defaultValue={''}
                                        onChange={this.onChange}
                                        onClick={(e) => this.props.preventButtonAction(e)}
                                        className="form-control zenzero-input-text"
                                        placeholder="New Password"
                                        aria-label="New Password"
                                        aria-describedby="basic-addon1" />
                                </div>
                                <div className='col-2 text-right'>
                                    <h4><span
                                        className="badge badge-danger"
                                        onClick={(e) => this.handleSubmit(e, 'password')}>Update</span></h4>
                                </div>
                            </div> 
                        </li>
                    </ul>
                    <div className='col-2'></div>
                </div>
                <div className='col-12 text-center zenzero-account-switch'>
                    {
                        user.buyer && user.owner ? (
                            <h5>
                                <span 
                                    className="badge badge-info"
                                    onClick={(e) => this.props.switchUser(e)}>Switch to {user.type == 'buyer'? 'Owner': 'Buyer'}?</span>
                            </h5>
                        ) : (
                            <h5>
                                <span
                                    className="badge badge-dark"
                                    onClick={(e) => this.props.registerUserAsSecondType(e)}>Register as {user.type == 'buyer'? 'Owner': 'Buyer'}?</span>
                            </h5>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Account;