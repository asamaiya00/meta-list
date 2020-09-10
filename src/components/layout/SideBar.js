import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Profile from './Profile';

import Main from './Main';

const SideBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/:id" component={Main} />
      </Switch>
    </>
  );
};

export default SideBar;
