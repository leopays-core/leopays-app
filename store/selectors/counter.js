import structure from '../structure';



const createSelectors = (structure) => {
  const { getIn, toJS } = structure;

  const getCounter = (state) => {
    //const counter = toJS(getIn(state, ['counter']));
    const counter = getIn(state, ['counter']);
    return counter;
  }
  //const getValue = (state) => toJS(getIn(getCounter(state), ['value']));
  const getValue = (state) => getIn(getCounter(state), ['value']);

  return {
    getCounter,
    getValue,
  };
}

export default createSelectors(structure);
