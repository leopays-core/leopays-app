import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import { hot } from 'react-hot-loader';

import { HeaderBackButton } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import ContactUsScreen from '../screens/ContactUsScreen';



const INITIAL_ROUTE_NAME = 'ContactUs';

const Stack = createStackNavigator();

function ContactUsStack({ navigation, route, t }) {

  //navigation.setOptions({ header: () => null });
  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} headerMode='float' >

      <Stack.Screen
        name='ContactUs'
        component={ContactUsScreen}
        options={() => {
          return ({
            headerTitle: t('Contact Us'),
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

    </Stack.Navigator>
  );
}

ContactUsStack.propTypes = {
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
    withTranslation()(ContactUsStack)
  )
));
