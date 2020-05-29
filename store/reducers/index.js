import { combineReducers } from 'redux-immutable';
import { connectRouter as createConnectedRouterReducer } from 'connected-react-router/immutable';
import createCounterReducer from './counter';
import createDeviceReducer from './device';
import createI18nextReducer from './i18next';
import structure from '../structure';



export const createRootReducer = (history) => {
  const rootReducer = combineReducers({
    router: createConnectedRouterReducer(history),
    i18next: createI18nextReducer(structure),
    counter: createCounterReducer(structure),
    device: createDeviceReducer(structure),
  });

  return rootReducer;
};

export default createRootReducer;
