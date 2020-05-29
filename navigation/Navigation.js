import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { hot } from 'react-hot-loader';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import LegalStackNavigator from './LegalStackNavigator';
import ContactUsStackNavigator from './ContactUsStackNavigator';



const Stack = createStackNavigator();

function Navigation(props) {
  const { languages, pathname } = props;
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
      <NavigationContainer linking={LinkingConfiguration({ languages, pathname })}>
        <Stack.Navigator initialRouteName='Main' headerMode='none' /*headerMode='none'*/>
          <Stack.Screen name='Main' component={MainBottomTabNavigator} />
          <Stack.Screen name='Legal' component={LegalStackNavigator} />
          <Stack.Screen name='ContactUs' component={ContactUsStackNavigator} />
          {/*
          '/contact-us'
          '/support'
          '/legal'
          '/auth'
          '/redirect'
          */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


Navigation.propTypes = {
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
  withImmutablePropsToJS(Navigation)
));
