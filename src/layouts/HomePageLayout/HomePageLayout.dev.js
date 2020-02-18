import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import HomePageLayout, {
  mapStateToProps, mapDispatchToProps
} from './HomePageLayout';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(
    hot(module)(HomePageLayout)
  )
);
