import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './containers/App';
import reducer from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <div className='container-fluid' id='zenzero'>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('root')
 )
