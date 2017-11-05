import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Thunk from 'redux-thunk';
import reducers from './js/reducers';
import Layout from './js/components/layout/PageLayout';
import Home from './js/containers/pages/Home';
import StartProject from './js/containers/pages/StartProject';
import FindProject from './js/containers/pages/FindProject';
import GiveOnce from './js/containers/pages/GiveOnce';
import BecomeMember from './js/containers/pages/BecomeMember';
import SupportProject from './js/containers/pages/SupportProject';
import Works from './js/containers/pages/Works';
import About from './js/containers/pages/About';
import LoginFacebook from './js/containers/pages/LoginFacebook';
import SignIn from './js/containers/pages/SignIn';
import SignUp from './js/containers/pages/SignUp';
import Project from './js/containers/pages/Project';
import Donation from './js/containers/pages/Donation';
import '../node_modules/react-select/dist/react-select.css';
import './sass/main.css';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/start_project" component={StartProject}></Route>
                <Route path="/find_project" component={FindProject}></Route>
                <Route path="/give_once" component={GiveOnce}></Route>
                <Route path="/become_member" component={BecomeMember}></Route>
                <Route path="/support_project" component={SupportProject}></Route>
                <Route path="/sign_in" component={SignIn}></Route>
                <Route path="/works" component={Works}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/facebook" component={LoginFacebook}></Route>
                <Route path="/sign_up" component={SignUp}></Route>
                <Route path="/project(/:pathParam)" component={Project}></Route>
                <Route path="/donate(/:pathParam)" component={Donation}></Route>
            </Route>
        </Router>
    </Provider>
    ,document.getElementById('root')
);
