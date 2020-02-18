import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import FixedMenuTopComputer, {
  mapStateToProps, mapDispatchToProps
} from './FixedMenuTopComputer';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(
    hot(module)(FixedMenuTopComputer)
  )
);
