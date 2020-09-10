import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import store from './store';

import SideBar from './components/layout/SideBar';

function App() {
  return (
    <Provider store={store}>
      <div className="row">
        <SideBar />
      </div>
    </Provider>
  );
}

export default App;
