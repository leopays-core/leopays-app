import {
  SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER
} from '../actions/counter';
import Immutable from 'immutable';


const createReducer = (structure) => {
  const { fromJS, getIn, merge, toJS } = structure;

  const initialState = Immutable.Map({
    value: 0,
  });

  return (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case SET_COUNTER:
        //return state.setIn(['value'], payload);
        return merge(state, { value: payload });
      case INCREMENT_COUNTER:
        //return Immutable.updateIn(state, ['value'], (val) => val + 1);
        return merge(state, { value: getIn(state, ['value']) + 1 });
      case DECREMENT_COUNTER:
        //return Immutable.updateIn(state, ['value'], (val) => val - 1);
        return merge(state, { value: getIn(state, ['value']) - 1 });
      default:
        return state;
    }
  };
}

export default createReducer;
