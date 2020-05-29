import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import { hot } from 'react-hot-loader';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MarkdownView from '../components/MarkdownView';
import getSource from './TermsScreenSources';



function TermsScreen(props) {
  const { i18n } = props;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <MarkdownView>{getSource(i18n.language)}</MarkdownView>
      </ScrollView>
    </View>
  );
}


TermsScreen.propTypes = {
  i18n: PropTypes.object,
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
    withTranslation()(TermsScreen)
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
