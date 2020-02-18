import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import FooterComputer, {
  mapStateToProps, mapDispatchToProps
} from './FooterComputer';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(
    hot(module)(FooterComputer)
  )
);
