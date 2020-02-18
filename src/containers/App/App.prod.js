import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import App, { mapStateToProps, mapDispatchToProps } from './App';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation('main')(App)
);
