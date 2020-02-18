import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import SignInLayout, {
  mapStateToProps, mapDispatchToProps
} from './SignInLayout';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(
    hot(module)(SignInLayout)
  )
);
