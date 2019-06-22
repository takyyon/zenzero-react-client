import React, { Component } from 'react';
import './index.scss';

class AdminView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersTab: true,
            eventsTab: false,
            offersTab: false,
            questionsTab: false
        };
        this.setTab = this.setTab.bind(this);
        this.getItemToShow = this.getItemToShow.bind(this);
        this.props.getAllUsers();
        this.props.getAllEvents();
        this.props.getAllOffers();
        this.props.getAllQuestions();
    }

    setTab(tab) {
        this.setState({
            usersTab: tab == 'usersTab',
            eventsTab: tab == 'eventsTab',
            offersTab: tab == 'offersTab',
            questionsTab: tab == 'questionsTab'
        })
    }

    getItemToShow() {
        const { users, events, offers, questions } = this.props;
        if(this.state.usersTab){
            return users;
        }
        if(this.state.eventsTab) {
            return events;
        }
        if(this.state.offersTab) {
            return offers;
        }
        if(this.state.questionsTab) {
            return questions;
        }
    }

    render() {
        const { usersTab, eventsTab, offersTab, questionsTab } = this.state;
        const items = this.getItemToShow();

        return (
            <div className='col-12 zenzero-admin-component'>
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <a className={`nav-link ${usersTab ? 'active' : '' }`} 
                            onClick={() => this.setTab('usersTab')}
                        >Users</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${eventsTab ? 'active' : '' }`}
                            onClick={() => this.setTab('eventsTab')}
                        >Events</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${offersTab ? 'active' : '' }`}
                            onClick={() => this.setTab('offersTab')}
                        >Offers</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${questionsTab ? 'active' : '' }`}
                            onClick={() => this.setTab('questionsTab')}
                        >Questions</a>
                    </li>
                </ul>
                <div className='row zenzero-admin-data'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) => {
                                    return (
                                        <tr key={`item-${index}`}
                                        >
                                            <td>
                                                {
                                                    item.name ? item.name : (
                                                        item.code ? item.code : (
                                                            item.title ? item.title :
                                                            item.text
                                                        )
                                                    )
                                                }
                                            </td>
                                            <td>{item.created}</td>
                                            <td>
                                                <i className='fa fa-trash'></i>
                                            </td>
                                        </tr>)
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminView;