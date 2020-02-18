import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import FooterComputer, {
  mapStateToProps, mapDispatchToProps
} from './FooterComputer';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(FooterComputer)
);
