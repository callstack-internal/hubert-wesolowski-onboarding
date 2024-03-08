import React, { PropsWithChildren } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { defaultTheme } from '../../theme';
import { APIQueryClientProvider } from '../api-query-client-provider';
import { UnitsContextProvider } from '../units-context';

export const AppContexts = ({ children }: PropsWithChildren) => (
  <SafeAreaProvider>
    <PaperProvider theme={defaultTheme}>
      <APIQueryClientProvider>
        <UnitsContextProvider>{children}</UnitsContextProvider>
      </APIQueryClientProvider>
    </PaperProvider>
  </SafeAreaProvider>
);
