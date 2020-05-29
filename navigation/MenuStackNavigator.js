import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import { hot } from 'react-hot-loader';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsMenuScreen from '../screens/SettingsMenuScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SettingsLanguageScreen from '../screens/SettingsLanguageScreen';
import { HeaderBackButton } from '@react-navigation/stack';



const INITIAL_ROUTE_NAME = 'Menu';

const Stack = createStackNavigator();

function MenuStack({ navigation, route, t }) {
  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Stack.Screen
        name='menu'
        component={SettingsMenuScreen}
        options={() => {
          return ({
            headerTitle: t('Menu'),
          })
        }}
      />

      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={() => {
          return ({
            headerTitle: t('Settings'),
          })
        }}
      />

      <Stack.Screen
        name='Language'
        component={SettingsLanguageScreen}
        options={() => {
          return ({
            headerTitle: t('Language'),
          })
        }}
      />

    </Stack.Navigator>
  );
}


MenuStack.propTypes = {
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
    withTranslation()(MenuStack)
  )
));
