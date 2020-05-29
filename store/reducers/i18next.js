import Immutable from 'immutable';
import {
  LANGUAGE_CHANGE
} from '../actions/i18next';
import i18nextConfig from '../../i18n/i18next-config';




const createReducer = (structure) => {
  const { fromJS, getIn, setIn, merge, toJS } = structure;

  const initialState = merge(
    Immutable.Map({
      language: null,
      whitelist: [],
      fallbackLng: null,
      ns: [],
      defaultNS: null,
      debug: false,
    }),
    Immutable.Map(i18nextConfig)
  );

  return (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case LANGUAGE_CHANGE:
        if (payload !== getIn(state, ['language'])) {
          return merge(state, { language: payload });
        }
        return state;
      default:
        return state;
    }
  };
}

export default createReducer;
