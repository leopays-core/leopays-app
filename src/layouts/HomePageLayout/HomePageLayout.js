import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
//import { Trans } from 'react-i18next';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';
import reactLogo from '../../react-logo.svg';
import UI from '../../containers/UI';


class HomePageLayout extends PureComponent {

  render() {
    logger.render('HomePageLayout');
    const { t, tReady, language, languages, pathname } = this.props;
    const ml = new mlURL({ languages: languages, pathname: pathname });

    if (tReady)
      return (
        <UI>
          <Helmet>
            <html lang={language} />
            <title>{t('main:proName')}</title>
          </Helmet>
          <header id="app" className="App-header">
            <img src={reactLogo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://testnet.milliard.money"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('main:welcome')}
            </a>

          </header>
        </UI>
      );
    else
      return <LoadingApp />;
  }
}

HomePageLayout.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string,
  languages: PropTypes.array,
  pathname: PropTypes.string,
}

export const mapStateToProps = (state) => {
  return {
    language: state.i18next.language,
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default HomePageLayout;
