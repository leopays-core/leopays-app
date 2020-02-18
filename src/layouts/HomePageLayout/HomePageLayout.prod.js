import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import HomePageLayout, {
  mapStateToProps, mapDispatchToProps
} from './HomePageLayout';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(HomePageLayout)
);
