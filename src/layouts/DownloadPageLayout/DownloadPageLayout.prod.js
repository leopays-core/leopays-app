import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import DownloadPageLayout, {
  mapStateToProps, mapDispatchToProps
} from './DownloadPageLayout';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(DownloadPageLayout)
);
