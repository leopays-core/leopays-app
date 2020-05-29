import * as React from 'react';
import Immutable from 'immutable';
import { Provider as StoreProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { hot } from 'react-hot-loader';
import Router from './components/Router';
import configureStore, { history } from './store';
import configureI18n, { handleChangeLocationImmutable } from './i18n';
import Routes from './Routes';
import logger from './lib/logger';
import { updateId } from './store/actions/device';


const log = new logger('Root.js');
const preloadedState = Immutable.Map(window.__PRELOADED_STATE__ || {});
const store = configureStore(preloadedState);
const i18n = configureI18n(store);
store.dispatch(updateId())

store.subscribe(handleChangeLocationImmutable(store, i18n));
store.subscribe(() => {
  //console.log('store.subscribe')
});
//history.push('/my/');//, [state])


class Root extends React.Component {
  render() {
    log.render();
    return (
      <StoreProvider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router history={history} /*context={context}*/>
            <Routes />
          </Router>
        </I18nextProvider>
      </StoreProvider>
    );
  }
}

export default hot(module)(Root);
