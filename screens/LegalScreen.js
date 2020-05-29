import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import { hot } from 'react-hot-loader';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OptionButton from '../components/OptionButton';



function LegalScreen(props) {
  const { t } = props;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <OptionButton
          label={t('Terms of Use')}
          onPress={() => props.navigation.navigate('Terms')}
        />
        <OptionButton
          label={t('Privacy Policy')}
          onPress={() => props.navigation.navigate('Privacy')}
        />
        <OptionButton
          label={t('Use of Cookies')}
          onPress={() => props.navigation.navigate('Cookies')}
        />
      </ScrollView>
    </View>
  );
}


LegalScreen.propTypes = {
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
    withTranslation()(LegalScreen)
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
