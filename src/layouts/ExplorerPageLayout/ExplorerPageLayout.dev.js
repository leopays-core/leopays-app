import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import ExplorerPageLayout, {
  mapStateToProps, mapDispatchToProps
} from './ExplorerPageLayout';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(
    hot(module)(ExplorerPageLayout)
  )
);
