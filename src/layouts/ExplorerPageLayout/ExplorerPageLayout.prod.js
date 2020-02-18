import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import ExplorerPageLayout, {
  mapStateToProps, mapDispatchToProps
} from './ExplorerPageLayout';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(ExplorerPageLayout)
);
