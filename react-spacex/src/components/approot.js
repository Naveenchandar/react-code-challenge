import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Rockets from './rockets/rocket';
import History from './history/index';
import Home from './home/index';
import RocketList from './rockets/index';

export const ApplicationRoot = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/history" component={History} />
                <Route exact path="/rocket/:rocketId" component={Rockets} />
                <Route exact path="/rockets" component={RocketList} />
            </Switch>
        </Router>
    );
}