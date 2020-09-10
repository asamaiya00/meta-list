import React, { Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Main from './Main';

const SideBar = () => {
  return (
    <Fragment>
      <div className="col l2 m2">
        <ul style={{ textAlign: 'center' }}>
          <li>
            <Link to="/Todos">  
              <h4>Todos</h4>
            </Link>
          </li>
          <li>
            <Link to="/Books">
              <h4>Books</h4>
            </Link>
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
