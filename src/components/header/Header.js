import React, { Component } from 'react';
import './index.scss';
import logo from './../../utility/img/logo.png';
import zenzero from './../../utility/img/zenzero.png';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            showRightMenu: false
        };

        this.toggleRightMenu = this.toggleRightMenu.bind(this);
    }


    toggleRightMenu(e) {
        if(e) {
            e.stopPropagation();
            e.preventDefault();
        }
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

    render() {
        const  { showRightMenu } = this.state;
        return (
            <div className='row zenzero-header'>
                <div className='col-3 text-left zenzero-logo'>
                    <img src={logo} alt='Logo' className='logo-img'/>
                    <img src={zenzero} alt='Zenzero' className='logo-txt'/>
                </div>
                <div className='col-7'>
                    <div className="input-group mb-3 zenzero-search">
                        <input type="text"
                            className="form-control col-9"
                            placeholder="Search Restaurant"
                            aria-label="Search Restaurant"
                            aria-describedby="basic-addon1" />
                        
                        <input type="text"
                            defaultValue='Boston, MA'
                            className="form-control col-3"
                            placeholder="Boston, MA"
                            aria-label="Boston, MA"
                            aria-describedby="basic-addon2" />
                        
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-2 text-right'>
                    <span className='dropdown zenzero-dropdown'>
                        <i className="fas fa-user-circle" onClick={(e) => this.toggleRightMenu(e)}></i>
                        <div className={`dropdown-menu zenzero-${showRightMenu ? 'show': 'hide'}`}>
                            <a className="dropdown-item" href="#">Action</a>
                            <div className="dropdown-divider"></div>
                        </div>
                    </span>
                    
                </div>
            </div>
        );
    }
}

export default Header;