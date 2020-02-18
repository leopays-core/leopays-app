import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import UserMenu, {
  mapStateToProps, mapDispatchToProps
} from './UserMenu';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(
    hot(module)(UserMenu)
  )
);
