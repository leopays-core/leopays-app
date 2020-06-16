import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import { hot } from 'react-hot-loader';
import * as WebBrowser from 'expo-web-browser';
import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import OptionButton from '../components/OptionButton';
import logo from '../assets/images/icon.png';



function HomeScreen(props) {
  const { t } = props;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.comingSoonContainer} >
          <Text style={{ fontWeight: 'bold', textAlign: 'center', }}>{t('Project Title')}</Text>
          <Text style={styles.сomingSoon}>{t('Coming soon')}...</Text>
        </View>

        <View style={styles.helpContainer}>
          <Button
            title={t('Contact Us')}
            onPress={() => props.navigation.navigate('ContactUs')}
          />
        </View>
      </ScrollView>

      {/*
      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}></Text>
        <Button
          title={t('Get Saterted') + '!'}
          onPress={() => props.navigation.navigate('Registration')}
        />
        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}></MonoText>
        </View>
      </View>
      */}
    </View>
  );
}


HomeScreen.propTypes = {
  t: PropTypes.func,
  navigation: PropTypes.object,
  pathname: PropTypes.string,
  language: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
}

const mapStateToProps = (state) => {
  return {
    pathname: state.getIn(['router', 'location', 'pathname']),
    language: state.getIn(['i18next', 'language']),
    languages: state.getIn(['i18next', 'whitelist']),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    withTranslation()(HomeScreen)
  )
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  comingSoonContainer: {
    alignItems: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
