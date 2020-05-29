import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import { hot } from 'react-hot-loader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MenuStackNavigator from './MenuStackNavigator';



const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function MainBottomTabNavigator({ navigation, route, t }) {

  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // header: () => null, 
  navigation.setOptions({ headerTitle: getHeaderTitle(route, t) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} >

      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('Home'),
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />

      <BottomTab.Screen
        name='Menu'
        component={MenuStackNavigator}
        options={{
          title: t('Menu'),
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="bars" />,
        }}
      />

    </BottomTab.Navigator>
  );
}

MainBottomTabNavigator.propTypes = {
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
    withTranslation()(MainBottomTabNavigator)
  )
));

function getHeaderTitle(route, t) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
    case 'Menu':
      return t('Menu');
    case 'Settings':
    case 'SettingsStack':
      return t('Settings');
  }
}
