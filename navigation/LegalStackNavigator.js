import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import { hot } from 'react-hot-loader';

import { HeaderBackButton } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

import LegalScreen from '../screens/LegalScreen';
import TermsScreen from '../screens/TermsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import CookiesScreen from '../screens/CookiesScreen';



const INITIAL_ROUTE_NAME = 'Legal';

const Stack = createStackNavigator();

function LegalStack({ navigation, route, t }) {

  //navigation.setOptions({ header: () => null });
  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} headerMode='float' >

      <Stack.Screen
        name='Legal'
        component={LegalScreen}
        options={() => {
          return ({
            headerTitle: t('Legal'),
            headerLeft: () => {
              return (<HeaderBackButton
                label={t('Back')}
                labelVisible={false}
                truncatedLabel={t('Back')}
                accessibilityLabel={t('Back')}
                onPress={() => navigation.navigate('Main', { screen: 'Menu' })}
              />);
            },
          });
        }}
      />

      <Stack.Screen
        name='Terms'
        component={TermsScreen}
        options={() => {
          return ({
            headerTitle: t('Terms of Use'),
            headerBackTitleVisible: false,
            headerBackTitle: t('Back'),
            headerTruncatedBackTitle: t('Back'),
          });
        }}
      />

      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={() => {
          return ({
            headerTitle: t('Privacy Policy'),
            headerBackTitleVisible: false,
            headerBackTitle: t('Back'),
            headerTruncatedBackTitle: t('Back'),
          });
        }}
      />

      <Stack.Screen
        name="Cookies"
        component={CookiesScreen}
        options={() => {
          return ({
            headerTitle: t('Use of Cookies'),
            headerBackTitleVisible: false,
            headerBackTitle: t('Back'),
            headerTruncatedBackTitle: t('Back'),
          });
        }}
      />

    </Stack.Navigator>
  );
}

LegalStack.propTypes = {
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
    withTranslation()(LegalStack)
  )
));
