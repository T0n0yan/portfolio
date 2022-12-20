import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/store'
import {Provider} from "react-redux";
import {HashRouter as Router} from "react-router-dom";
import './i18n/i18next.js'
import Preloader from "./utile/preloader";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Preloader/>}>
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        </Suspense>

    </React.StrictMode>,
    document.getElementById('root')
);


