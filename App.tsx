import NetInfo from '@react-native-community/netinfo';
import {
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from './src/routes/routes';
import { defaultTheme } from './src/theme';

const queryClient = new QueryClient();

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected);
  });
});

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
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default AppContext;
