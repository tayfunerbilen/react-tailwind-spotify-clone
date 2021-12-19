import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import App from './App';
import stores from './stores'
import {Provider} from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={stores}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
