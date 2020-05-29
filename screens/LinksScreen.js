import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OptionButton from '../components/OptionButton';



export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <OptionButton
          icon="graduation-cap"
          label="Read the Expo documentation"
          onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
        />

        <OptionButton
          icon="compass"
          label="Read the React Navigation documentation"
          onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
        />

        <OptionButton
          icon="comments"
          label="Ask a question on the forums"
          onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
          isLastOption
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
});
