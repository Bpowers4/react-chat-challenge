import React from 'react';

import appStyles from './App.scss';

import Header from './Header/Header';
import Body from './Body/Body';

const App = () => (
  <div className={appStyles.main}>
    <Header />
    <Body>
      Example sub-component
    </Body>
  </div>
);

export default App;
