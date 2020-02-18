import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
  Icon,
  Label,
  Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import mlURL from 'multi-languages-url';
import LanguageToogler from '../../components/LanguageToogler';
import logger from '../../lib/logger';
import reactLogo from '../../react-logo.svg';


class FooterComputer extends PureComponent {
  /*shouldComponentUpdate(nextProps, nextState) {
    if (this.props.language !== nextProps.language)
      return true;
    return false;
  }*/

  render() {
    logger.render('FooterComputer');

    const { t, tReady, language, languages, pathname } = this.props;
    const ml = new mlURL({ languages: languages, pathname: pathname });
    const fixed = true;

    return (
      <Segment inverted vertical style={{ padding: '5em 0em', margin: '1em 0em 0em 0em' }}>
        <Container>
          <Grid divided inverted stackable>

            <Grid.Row>
              <Grid.Column width={4}>
                <Header as='h4' inverted
                  content={t('footer:Company').toUpperCase()} />
                <Divider />
                <List link inverted>
                  <List.Item as={Link} to={ml.url('/about')}>
                    {t('footer:About')}</List.Item>
                  <List.Item as={Link} to={ml.url('/support')}>
                    {t('footer:Support')}</List.Item>
                  <List.Item as={Link} to={ml.url('/faq')}>
                    {t('footer:FAQ')}</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={12}>
                <Header as='h4' inverted
                  content={t('footer:Server Status').toUpperCase()} />
                <Divider />
                <List link horizontal inverted celled>
                  {
                    Object.keys(this.props.servers).map((key) => {
                      const item = this.props.servers[key];
                      const color = (item.error === null) ? "green" : "red";
                      return (
                        <List.Item as={'p'} key={item.server.id}>
                          <Icon name='circle' color={color} />
                          {item.server.name}
                          (<a>{
                            this.props.networks[item.server.chain_id]
                              ? this.props.networks[item.server.chain_id].name
                              : ""//"Unknown"
                          }</a>)
                        </List.Item>
                      );
                    })
                  }
                </List>
              </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row>
              <Grid.Column width={4} textAlign='left'>
                <List link divided horizontal inverted>
                  <List.Item as={Link} to={ml.url('/')}>
                    <Image size='mini' src={reactLogo} className="App-logo" alt="logo" />
                    {t('main:proName')}
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={8} textAlign='center'>
                <Grid.Row>
                  <List link horizontal inverted divided>
                    <List.Item as={Link} to={ml.url('/privacy')}>
                      {t('footer:Privacy Policy')}
                    </List.Item>
                    <List.Item as={Link} to={ml.url('/terms')}>
                      {t('footer:Terms & Conditions')}
                    </List.Item>
                    <List.Item
                      as={'a'} target='_blank' href={`mailto:info@leopays.com`}
                    >
                      {t('footer:Contact')}
                    </List.Item>
                  </List>
                </Grid.Row>
                <Grid.Row>
                  <List link divided horizontal inverted>
                    <List.Item as={'p'}>
                      {
                        t(
                          'footer:copyright',
                          {
                            year: new Date().getFullYear(),
                            name: t('main:proName')
                          }
                        )
                      }
                    </List.Item>
                  </List>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={4} textAlign='right'>
                <LanguageToogler />
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Container>
      </Segment>
    );
  }
}

FooterComputer.propTypes = {
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
    servers: state.servers.servers,
    networks: state.servers.networks,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default FooterComputer;
