import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Zenzero from './containers/Zenzero';

ReactDOM.render(
    <div className='container-fluid' id='zenzero'>
        <Zenzero />
    </div>,
    document.getElementById('root')
 )
