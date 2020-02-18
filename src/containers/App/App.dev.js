import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import App, { mapStateToProps, mapDispatchToProps } from './App';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation('main')(
    hot(module)(App)
  )
);
