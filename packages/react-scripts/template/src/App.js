import React from 'react';

import './style/css/main.css';

import Store from './Store';
import Routes from './Routes';

// import { PublicServantLayout } from '@nara.platform/station';

function App() {
  return (
    <Store>
      <Routes />
    </Store>
  );
}

export default App;
