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
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header as='h4' inverted
                  content={t('footer:Mining').toUpperCase()} />
                <Divider />
                <List link inverted>
                  <List.Item as={Link} to={ml.url('/mining')}>
                    {t('footer:Start Mining')}</List.Item>
                  <List.Item as={Link} to={ml.url('/cpu-gpu-mining')}>
                    {t('footer:Mining with CPU/GPU')}</List.Item>
                  <List.Item as={Link} to={ml.url('/asic-mining')}>
                    {t('footer:ASIC Mining')}</List.Item>
                  <List.Item as={Link} to={ml.url('/lhos-mining')}>
                    {t('footer:LitHash OS')}</List.Item>
                  <List.Item as={Link} to={ml.url('/algorithm')}>
                    {t('footer:Algorithms')}</List.Item>
                  <List.Item as={Link} to={ml.url('/miner')}>
                    {t('footer:Find Miner')}</List.Item>
                  <List.Item as={Link} to={ml.url('/profitability-calculator')}>
                    {t('footer:Profitability Calculator')}</List.Item>
                  <List.Item as={Link} to={ml.url('/stratum-generator')}>
                    {t('footer:Stratum Generator')}</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={4}>
                <Header as='h4' inverted
                  content={t('footer:Hash Power Marketplace').toUpperCase()} />
                <Divider />
                <List link inverted>
                  <List.Item as={Link} to={ml.url('/marketplace')}>
                    {t('footer:Live Marketplace')}</List.Item>
                  <List.Item as={Link} to={ml.url('/pricing')}>
                    {t('footer:Pricing')}</List.Item>
                  <List.Item as={Link} to={ml.url('/compatible-pools')}>
                    {t('footer:Compatible Pools')}</List.Item>
                </List>

                <Header as='h4' inverted
                  content={t('footer:Exchange').toUpperCase()} />
                <Divider />
                <List link inverted>
                  <List.Item as={Link} to={ml.url('/exchange')}>
                    {t('footer:Trade Digital Currencies')}
                    <Label circular color='blue'>{t('footer:New')}</Label>
                  </List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={4}>
                <Header as='h4' inverted
                  content={t('footer:Developers').toUpperCase()} />
                <Divider />
                <List link inverted>
                  <List.Item as={Link} to={ml.url('/pool-operators')}>
                    {t('footer:Pool Operators')}</List.Item>
                  <List.Item as={Link} to={ml.url('/software-developers')}>
                    {t('footer:Software Developers')}</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://docs.lithash.io/'}
                  >
                    {t('footer:API\'s')}</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://github.com/lithash/rest-clients-demo'}
                  >
                    {t('footer:Sample code')}</List.Item>
                  <List.Item as={Link} to={ml.url('/business-development')}>
                    {t('footer:Business Development')}</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={4}>
                <Header as='h4' inverted
                  content={t('footer:Company').toUpperCase()} />
                <Divider />
                <List link inverted>
                  <List.Item as={Link} to={ml.url('/about')}>
                    {t('footer:About')}</List.Item>
                  <List.Item as={Link} to={ml.url('/media')}>
                    {t('footer:Media')}</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://blog.lithash.io/'}
                  >
                    {t('footer:News')}</List.Item>
                  <List.Item as={Link} to={ml.url('/referrals')}>
                    {t('footer:Referrals')}</List.Item>
                  <List.Item as={Link} to={ml.url('/support')}>
                    {t('footer:Support')}</List.Item>
                  <List.Item as={Link} to={ml.url('/support')}>
                    {t('footer:Help')}</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://status.lithash.io/'}
                  >
                    {t('footer:Status')}</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://blog.lithash.io/'}
                  >
                    {t('footer:Blog')}</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h4' inverted
                  content={t('footer:Connect With Us On').toUpperCase()} />
                <Divider />
                <List link horizontal inverted celled >
                  <List.Item as={'a'} target='_blank'
                    href={'https://www.facebook.com/@?/'}
                  >
                    Facebook</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://www.youtube.com/c/@?'}
                  >
                    Youtube</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://www.twitter.com/@?/'}
                  >
                    Twitter</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://discordapp.com/channels/@?/@?'}
                  >
                    Discord</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://vk.com/@?'}
                  >
                    VK</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://www.reddit.com/r/@?/'}
                  >
                    Reddit</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://github.com/lithash'}
                  >
                    GitHub</List.Item>
                  <List.Item as={'a'} target='_blank'
                    href={'https://www.instagram.com/@?/'}
                  >
                    Instagram</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={8}>
                <Header as='h4' inverted
                  content={t('footer:Server Status').toUpperCase()} />
                <Divider />
                <List link horizontal inverted celled>
                  <List.Item as={'p'}>
                    <Icon name='circle' color='green' /> EU - Amsterdam
                  </List.Item>
                  <List.Item as={'p'}>
                    <Icon name='circle' color='green' /> USA - San Jose
                  </List.Item>
                  <List.Item as={'p'}>
                    <Icon name='circle' color='green' /> CH - Hong Kong
                  </List.Item>
                  <List.Item as={'p'}>
                    <Icon name='circle' color='green' /> JAP - Tokyo
                  </List.Item>
                  <List.Item as={'p'}>
                    <Icon name='circle' color='green' /> IN - Chennai
                  </List.Item>
                  <List.Item as={'p'}>
                    <Icon name='circle' color='green' /> BRA - Sao Paulo
                  </List.Item>
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
                      as={'a'} target='_blank' href={`mailto:info@lithash.io`}
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
    language: state.getIn(['i18next', 'language']),
    languages: state.getIn(['i18next', 'whitelist']),
    pathname: state.getIn(['router', 'location', 'pathname']),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default FooterComputer;
