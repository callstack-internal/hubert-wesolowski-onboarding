import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from './src/routes/routes';
import { defaultTheme } from './src/theme';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}

function AppContext(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={defaultTheme}>
        <App />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default AppContext;
