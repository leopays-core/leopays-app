import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
//import mlURL from 'multi-languages-url';
import LoadingApp from '../../components/LoadingApp';
import logger from '../../lib/logger';
import UI from '../../containers/UI';
import { Header, Icon, Segment, Table, Container } from 'semantic-ui-react';

const downloadLinks = [
  {
    title: 'Windows',
    icon: 'windows',
    link: '#',
  }, {
    title: 'Mac OS X',
    icon: 'apple',
    link: '#',
  }, {
    title: 'Linux',
    icon: 'linux',
    link: '#',
  }
];
{/*
Или выберите свою операционную систему
Windows
exe - zip
Mac OS X
dmg - tar.gz
Linux (tgz)
*/}
const TableOfDownloads = (props) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Операционная система</Table.HeaderCell>
        <Table.HeaderCell>Ссылки</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        downloadLinks.map((item, index) => {
          return (
            <Table.Row key={index}>
              <Table.Cell collapsing >
                <Icon name={item.icon} />{item.title}
              </Table.Cell>
              <Table.Cell>
                <a target="_blank" rel="noopener noreferrer"
                  href={item.link}
                >Скачать</a>
              </Table.Cell>
            </Table.Row>
          );
        })
      }
    </Table.Body>
  </Table>
);

class DownloadPageLayout extends PureComponent {
  render() {
    logger.render('DownloadPageLayout');
    const { t, tReady, language/*, languages, pathname*/ } = this.props;
    //const ml = new mlURL({ languages: languages, pathname: pathname });

    if (tReady)
      return (
        <UI>
          <Helmet>
            <html lang={language} />
            <title>{t('menu:Download')} | {t('main:proName')}</title>
          </Helmet>
          <Container style={{ paddingTop: '7em', paddingBottom: '1em', minHeight: '100vh' }}>
            <Header as='h1'>{t('menu:Download')}</Header>
            <Segment textAlign='left'>
              Для загрузки программы выберите версию операционной системы и нажмите ссылку "Скачать".
            </Segment>
            <Header as='h2' textAlign='left'>LeoPays Commander</Header>
            <TableOfDownloads />
          </Container>
        </UI >
      );
    else
      return <LoadingApp />;
  }
}

DownloadPageLayout.propTypes = {
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

export default DownloadPageLayout;
