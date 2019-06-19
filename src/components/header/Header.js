import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import logo from './../../utility/img/logo.png';
import zenzero from './../../utility/img/zenzero.png';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            showRightMenu: false,
            term: '',
            location: 'Boston, MA'
        };

        this.onChange = this.onChange.bind(this);
        this.toggleRightMenu = this.toggleRightMenu.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.getUserId = this.getUserId.bind(this);
    }

    onChange(e) {
        if(!e || !e.target){
            return;
        }
        if(e.target.id == 'term'){
            this.setState({
                term: e.target.value
            });
        }
        if(e.target.id == 'location') {
            this.setState({
                location: (e.target.value == '') ? 'Boston, MA' : e.target.value
            });
        }
    }

    handleSearch(e){
        this.props.preventButtonAction(e);
        this.props.findRestaurants(this.state.term, this.state.location);
    }

    toggleRightMenu(e) {
        this.props.preventButtonAction(e);
        this.setState({
            showRightMenu: !this.state.showRightMenu
        });
    }

    componentDidUpdate() {
        const { hideRightMenu } = this.props;
        
        if(hideRightMenu && this.state.showRightMenu) {
            this.toggleRightMenu();
            this.props.toogleHideRightMenu();
        }
    }

    getUserId() {
        const { buyer, owner } = this.props;
        
        if(buyer)
            return buyer.userId;
        if(owner)
            return owner.userId;
        return null;
    }

    render() {
        const  { showRightMenu } = this.state;
        const { buyer, owner } = this.props;
        
        return (
            <div className='row zenzero-header'>
                <div className='col-3 text-left zenzero-logo'>
                    <img src={logo} alt='Logo' className='logo-img'/>
                    <img src={zenzero} alt='Zenzero' className='logo-txt'/>
                </div>
                <div className='col-7'>
                    <div className="input-group mb-3 zenzero-search">
                        <input type="text"
                            id='term'
                            onChange={this.onChange}
                            onClick={(e) => this.props.preventButtonAction(e)}
                            className="form-control zenzero-input-text col-9"
                            placeholder="Search Restaurant"
                            aria-label="Search Restaurant"
                            aria-describedby="basic-addon1" />
                        
                        <input type="text"
                            defaultValue='Boston, MA'
                            id='location'
                            onClick={(e) => this.props.preventButtonAction(e) }
                            onChange={this.onChange}
                            className="form-control zenzero-input-text col-3"
                            placeholder="Boston, MA"
                            aria-label="Boston, MA"
                            aria-describedby="basic-addon2" />
                        
                        <div className="input-group-append">
                            <button 
                                className="btn btn-outline-secondary zenzero-button"
                                type="button"
                                onClick={(e) => this.handleSearch(e)}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-2 text-right'>
                    <span className='dropdown zenzero-dropdown'>
                        <i className="fas fa-user-circle" onClick={(e) => this.toggleRightMenu(e)}></i>
                        <div className={`dropdown-menu zenzero-${showRightMenu ? 'show': 'hide'}`}>
                            { (buyer || owner) && 
                                (<button className='dropdown-item' >Edit Account</button>)}
                            { (buyer || owner) && 
                                (
                                    <Link to={`/${buyer?'buyer':'owner'}/${this.getUserId()}`}><button
                                        className='dropdown-item'
                                        id='profile'
                                        onClick={this.handleClick}
                                    >My Profile</button></Link>
                                )}
                            { ((buyer && buyer.isDual) || (owner && owner.isDual)) && 
                                (<button className='dropdown-item' >Switch Role</button>)}
                            { (buyer || owner) && 
                                (<div className="dropdown-divider"></div>)}
                            { (buyer || owner) && 
                                (<button className='dropdown-item' >Log out</button>)}
                            { (!buyer && !owner) && 
                                (<button className='dropdown-item' onClick={() => this.props.toggleLoginPopup(true)}>
                                    Login / Signup</button>)}
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

export default Header;