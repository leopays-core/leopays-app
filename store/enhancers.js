import { applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist-immutable';



export const createEnhancers = (history) => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let devTools = false;

  let middlewares = [];
  middlewares.push(routerMiddleware(history));
  middlewares.push(thunk);

  if (process.env.NODE_ENV !== 'production') {
    const { createLogger } = require('redux-logger');

    middlewares.push(createLogger({}));

    /*
    devTools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : null;
    */
  }

  let enhancers = [];
  enhancers.push(applyMiddleware(...middlewares));
  enhancers.push(autoRehydrate());
  //if (devTools) enhancers.push(devTools);

  return composeEnhancer(...enhancers);
}

export default createEnhancers;
