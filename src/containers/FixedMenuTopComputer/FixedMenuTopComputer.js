import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import mlURL from 'multi-languages-url';
import UserMenu from '../../components/UserMenu';
import logger from '../../lib/logger';
import reactLogo from '../../react-logo.svg';


/*
static onlyMobile = { minWidth: 320, maxWidth: 767 }
static onlyTablet = { minWidth: 768, maxWidth: 991 }
static onlyComputer = { minWidth: 992 }//maxWidth: 1199
static onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 }
static onlyWidescreen = { minWidth: 1920 }
*/
class FixedMenuTopComputer extends PureComponent {
  /*shouldComponentUpdate(nextProps, nextState) {
    if (this.props.language !== nextProps.language)
      return true;
    return false;
  }*/

  render() {
    logger.render('FixedMenuTopComputer');

    const { t, tReady, language, languages, pathname } = this.props;
    const ml = new mlURL({ languages: languages, pathname: pathname });
    const fixed = true;

    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to={ml.url('/')} header>
            <Image size='mini' src={reactLogo} className="App-logo" alt="logo" />
            {/*<Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />*/}
            {t('main:proName')}
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={ml.url('/explorer')} >
            {t('menu:Explorer')}
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={ml.url('/dashboard')} >
            {t('menu:Dashboard')}
          </Menu.Item>
          <Menu.Item as={NavLink} exact to={ml.url('/wallet')} >
            {t('menu:Wallet')}
          </Menu.Item>

          <Menu.Item position='right' fitted='vertically'>
            <UserMenu />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

FixedMenuTopComputer.propTypes = {
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

export default FixedMenuTopComputer;
