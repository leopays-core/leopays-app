import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { hot } from 'react-hot-loader';
//import mlURL from 'multi-languages-url';
//import Loadable from 'react-loadable';
import Switch from './components/Switch';
import Route from './components/Route';
import logger from './lib/logger';
import Navigation from './navigation/Navigation';



const log = new logger('Routes.js');
/*
const Navigation = Loadable({
  loader: () => import('./navigation/Navigation'),
  loading: () => null,
  delay: 200, // 0.2 seconds,
  //timeout: 10000,
});
*/

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    log.render();
    //const { languages, pathname } = this.props;
    //const ml = new mlURL({ languages: languages, pathname: pathname });
    return (
      <>
        <Switch>
          <Route path={'/*'} component={Navigation} comment='' />
          {/*<Route path={ml.url('/*')} component={Navigation} comment='' />*/}
        </Switch>
      </>
    );
  }
}


Routes.propTypes = {
  pathname: PropTypes.string,
  language: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
}

const mapStateToProps = (state) => {
  return {
    pathname: state.getIn(['router', 'location', 'pathname']),
    language: state.getIn(['i18next', 'language']),
    languages: state.getIn(['i18next', 'whitelist']),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(
  withImmutablePropsToJS(Routes)
));
