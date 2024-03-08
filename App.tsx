import React from 'react';
import { StatusBar } from 'react-native';

import { AppContexts } from './src/contexts/app-contexts';
import { Routes } from './src/routes/routes';

function App(): React.JSX.Element {
  return (
    <AppContexts>
      <StatusBar barStyle="light-content" />
      <Routes />
    </AppContexts>
  );
}

export default App;
