import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Repository from '../pages/Repository';

import Dashboard from '../pages/Dashboard/index';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repositories/:repository+" component={Repository} exact />
    </Switch>
);

export default Routes;
