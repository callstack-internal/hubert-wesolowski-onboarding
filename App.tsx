import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Button } from './src/components/button';

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
      <App />
    </SafeAreaProvider>
  );
}

export default AppContext;
