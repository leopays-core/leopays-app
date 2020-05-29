import Immutable from 'immutable';
import { createStore } from 'redux';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { Platform, AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist-immutable';
import createRootReducer from './reducers';
import createEnhancers from './enhancers';



const persistConfig = {
  //keyPrefix: 'reduxPersist:',
  storage: AsyncStorage,
  //blacklist: ['router'],
  whitelist: [], //['counter'],
}


const createHistory = Platform.select({
  web: createBrowserHistory,
  default: createMemoryHistory,
});

const basename = `${process.env.PUBLIC_URL}` || "";
export const history = createHistory({
  basename: basename,
});
history.listen((location, action) => {
  // location is an object like window.location
  // console.log('history.listen', action, location.pathname, location.hash, location.search, location.state);
});


const initialState = Immutable.Map({
  router: history,
});


export const configureStore = (preloadedState = Immutable.Map({})) => {
  const store = createStore(
    createRootReducer(history),
    Immutable.mergeDeep(initialState, preloadedState),
    createEnhancers(history),
  );


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  persistStore(store, persistConfig);

  return store;
}

export default configureStore;
