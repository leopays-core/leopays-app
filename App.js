import * as React from 'react';
import ReactHotLoader, { setConfig } from 'react-hot-loader';
import PatchedReactDOM from '@hot-loader/react-dom';
import { SafeAreaView, StyleSheet } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import Root from './Root';
import Logger from './lib/logger';


const log = new Logger('App.js');

if (process.env.NODE_ENV !== 'production') {
  ReactHotLoader.patch(React, PatchedReactDOM);
  setConfig({
    reloadHooks: false,
    logLevel: 'debug',
    //errorReporter: ErrorBoundary,
    //pureSFC: true,
    //ignoreSFC: true, // RHL will be __completely__ disabled for SFC
    //pureRender: true // RHL will not change render method
  });
}


export default function App(props) {
  log.render();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Root />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
