import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "materialize-css/dist/css/materialize.css"
import "materialize-css/dist/js/materialize.js"

import About from './components/About';
import Login from './components/Login';
// import Home from './components/Home';
// import Portfolio from './components/Portfolio';
import Base from './components/Base';
// import Contacts from './components/Contacts';
// import References from './components/References';

import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

ReactDOM.render(<BrowserRouter>
    <Base>
        <Switch>
            <Route exact path='/' component={About} />
            <Route path='/login/' component={Login} />
            {/*<Route path='/about' component={About}/>*/}
            {/*<Route path='/portfolio' component={Portfolio}/>*/}
            {/*<Route path='/contacts' component={Contacts}/>*/}
            {/*<Route path='/references' component={References}/>*/}
        </Switch>
    </Base>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
