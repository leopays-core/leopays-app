import Immutable from 'immutable'
//import plainSetIn from '../plain/setIn'

const setIn = (state, path, value) => Immutable.setIn(state, path, value);
/*
Immutable.Iterable.isIterable(state)
  ? Immutable.setIn(state, path, value)
  : plainSetIn(state, path)
*/

export default setIn;
