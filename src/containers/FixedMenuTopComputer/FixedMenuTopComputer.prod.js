import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import FixedMenuTopComputer, {
  mapStateToProps, mapDispatchToProps
} from './FixedMenuTopComputer';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(FixedMenuTopComputer)
);
