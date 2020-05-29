import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withTranslation } from 'react-i18next';
import { hot } from 'react-hot-loader';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import localeEmoji from 'locale-emoji';
import OptionButton from '../components/OptionButton';
import { push, replace } from 'connected-react-router';
import { useLinkTo } from '@react-navigation/native';


function SettingsLanguageScreen(props) {
  const linkTo = useLinkTo();

  let state = {
    defaultLanguage: props.defaultLanguage,
    languages: props.languages,
    languagesList: props.languages_list,
  };

  const { t, i18n, languages_list, languages } = props;
  const languages_last = languages_list.length - 1;


  const handleChange = (lng_code) => {

    let newLanguage = state.defaultLanguage;
    if (state.languages.indexOf(lng_code) !== -1) {
      newLanguage = lng_code;
    }

    let pathnameArray = props.location.pathname.split('/');
    pathnameArray = pathnameArray.filter(elem => elem !== "");
    if (state.languages.indexOf(pathnameArray[0]) !== -1) {
      pathnameArray.shift();
    }

    if (newLanguage !== props.language) {
      if (newLanguage !== state.defaultLanguage) {
        pathnameArray.unshift(newLanguage);
      }
      let newLocation = '/' + pathnameArray.join('/') + props.location.search + props.location.hash;

      //i18n.changeLanguage(lng_code);
      props.languageChangeDispatcher(`/${newLanguage}/`);
      window.location.reload();
      //linkTo(newLocation);
      //props.navigation.navigate('Settings', { params: { lng: lng_code } });
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {
          languages_list.map((item, index) => {
            return (
              <OptionButton
                key={item.key}
                icon={item.value === i18n.language ? 'check-circle-o' : 'circle-o'}
                color={item.value === i18n.language ? 'green' : null}
                label={`${localeEmoji(item.country_сode)} ${item.text}`}
                onPress={() => {
                  handleChange(item.value);
                }}
                isLastOption={languages_last === index ? true : false}
              />
            )
          })
        }
      </ScrollView>
    </View>
  );
}
// isLastOption

SettingsLanguageScreen.propTypes = {
  t: PropTypes.func,
  navigation: PropTypes.object,
  pathname: PropTypes.string,
  language: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
}

const mapStateToProps = (state) => {
  return {
    location: window.location,//state.getIn(['router', 'location']),
    pathname: state.getIn(['router', 'location', 'pathname']),
    language: state.getIn(['i18next', 'language']),
    languages: state.getIn(['i18next', 'whitelist']),
    languages_list: state.getIn(['i18next', 'languages_list']),
    defaultLanguage: state.getIn(['i18next', 'fallbackLng']),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    languageChangeDispatcher: (newLocation) => {
      dispatch(push(newLocation));
    },
  };
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(
    withTranslation()(SettingsLanguageScreen)
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
