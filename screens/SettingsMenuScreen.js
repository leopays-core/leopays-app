import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import { hot } from 'react-hot-loader';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OptionButton from '../components/OptionButton';
import * as Alert from '../components/Alert';



function SettingsMenuScreen(props) {
  const { t } = props;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <OptionButton
          icon='comments'
          label={t('Contact Us')}
          onPress={() => props.navigation.navigate('ContactUs')}
        />

        {/*
        <OptionButton
          icon='user-circle'
          label={t('Profile')}
          onPress={() => Alert.alert(
            'Alert',
            'Not ready',
            [
              { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
          )}
        />
        */}

        <OptionButton
          icon='cogs'
          label={t('Settings')}
          onPress={() => props.navigation.navigate('Settings')}
        />

        {/*
        <OptionButton
          icon='question-circle'
          label={t('Help & Support')}
          onPress={() => Alert.alert(
            'Alert',
            'Not ready',
            [
              { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
          )}
        />
        */}

        <OptionButton
          icon='legal'
          label={t('Legal')}
          onPress={() => props.navigation.navigate('Legal')}
          isLastOption
        />
      </ScrollView>
    </View>
  );
}


SettingsMenuScreen.propTypes = {
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
    withTranslation()(SettingsMenuScreen)
  )
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
});
