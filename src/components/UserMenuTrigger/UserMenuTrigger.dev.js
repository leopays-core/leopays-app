import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import UserMenuTrigger, {
  mapStateToProps, mapDispatchToProps
} from './UserMenuTrigger';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(
    hot(module)(UserMenuTrigger)
  )
);
