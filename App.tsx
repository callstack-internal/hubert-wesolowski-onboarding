import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Button } from './src/components/button';
import { defaultTheme } from './src/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Button />
      </View>
    </SafeAreaView>
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
