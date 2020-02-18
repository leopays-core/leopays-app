import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
import logger from '../../lib/logger';


class UILargeScreen extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //if (this.props.language !== nextProps.language)
    //  return true;
    return false;
  }

  render() {
    logger.render('UILargeScreen');

    return (
      <Responsive {...this.props}
        minWidth={Responsive.onlyLargeScreen.minWidth}
        maxWidth={Responsive.onlyLargeScreen.maxWidth}
      >
        {this.props.children}
      </Responsive>
    );
  }
}

UILargeScreen.propTypes = {
  children: PropTypes.node,
  //language: PropTypes.string,
}

export const mapStateToProps = (state) => {
  return {
    //language: state.i18next.language,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default UILargeScreen;
