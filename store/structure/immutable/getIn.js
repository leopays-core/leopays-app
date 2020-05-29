/* Code from github.com/erikras/redux-form by Erik Rasmussen */
import Immutable from 'immutable'
import plainGetIn from '../plain/getIn'

const getIn = (state, path) =>
  Immutable.Iterable.isIterable(state)
    ? Immutable.getIn(state, path)
    : plainGetIn(state, path)

export default getIn
