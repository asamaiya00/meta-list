import React, { Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Main from './Main';

const SideBar = () => {
  return (
    <Fragment>
      <div className="col l2 m2">
        <ul>
          <li>
            <Link to="/Todos">Todos</Link>
          </li>
          <li>
            <Link to="/Books">Books</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/:list" component={Main} />
      </Switch>
    </Fragment>
  );
};

export default SideBar;
