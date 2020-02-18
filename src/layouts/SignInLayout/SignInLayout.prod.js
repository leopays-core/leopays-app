import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import SignInLayout, {
  mapStateToProps, mapDispatchToProps
} from './SignInLayout';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(SignInLayout)
);
