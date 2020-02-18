import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import UserMenuTrigger, {
  mapStateToProps, mapDispatchToProps
} from './UserMenuTrigger';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(UserMenuTrigger)
);
