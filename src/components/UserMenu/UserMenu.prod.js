import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import FooterComputer, {
  mapStateToProps, mapDispatchToProps
} from './UserMenu';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(FooterComputer)
);
