import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from './src/routes/routes';
import { defaultTheme } from './src/theme';

const queryClient = new QueryClient();

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
