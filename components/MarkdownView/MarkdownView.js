import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { MarkdownView } from 'react-native-markdown-view';



export default function WrappedMarkdownView(props) {
  return (
    <MarkdownView
      onLinkPress={(url) => {
        WebBrowser.openBrowserAsync(url)
          .catch((error) =>
            console.warn('An error occurred: ', error),
          );
      }}
      {...props}
    />
  );
}

/*
//import { Linking } from 'react-native';

onLinkPress={(url) => {
  Linking.openURL(url).catch(error =>
    console.warn('An error occurred: ', error),
  )
}}
*/
