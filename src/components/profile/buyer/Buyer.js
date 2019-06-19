import React, { Component } from 'react';
import './index.scss';
import Questions from '../../restaurant-detail/questions/Questions';


class Buyer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestionModal: false,
            showEventModal: false,
            showOfferModal: false,
        };
        this.toggleEventModal = this.toggleEventModal.bind(this);
        this.toggleQuestionModal = this.toggleQuestionModal.bind(this);
        this.toggleOfferModal = this.toggleOfferModal.bind(this);
    }

    toggleQuestionModal(e, id=null) {
        this.props.preventButtonAction(e);
        if(id) {
            this.props.findQuestionById(id);
        }
        this.setState({
            showQuestionModal: !this.state.showQuestionModal,
            edit: false,
            add: false
        });
    }

    toggleOfferModal(e, id=null) {
        this.props.preventButtonAction(e);
        if(id) {
            this.props.findOfferById(id);
        }
        this.setState({
            showOfferModal: !this.state.showOfferModal,
            edit: false,
            add: false
        });
    }

    toggleEventModal(e, id=null) {
        this.props.preventButtonAction(e);
        if(id) {
            this.props.findEventById(id);
        }
        this.setState({
            showEventModal: !this.state.showEventModal,
            edit: false,
            add: false
        });
    }

    render() {
        const { buyer, owner, offers, events, questions, question, offer, event } = this.props;
        const { showEventModal, showOfferModal, showQuestionModal }  = this.state;
        return (
            <div className='zenzero-buyer-profile'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='row'>

                        </div>
                        <div className='row'>
                            
                        </div>
                    </div>
                    <div className='col-4'>
                        <Questions
                            questions={questions}
                            toggleModal={this.toggleQuestionModal}
                            toggleEditAddModal={undefined}
                            selected={question}
                            showModal={showQuestionModal}
                            buyer={buyer}
                            owner={owner}
                            add={false}
                            addQuestion={undefined}
                            addComment={undefined}
                            profilePage={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Buyer;