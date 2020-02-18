import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import NotFoundPageLayout, {
  mapStateToProps, mapDispatchToProps
} from './NotFoundPageLayout';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(NotFoundPageLayout)
);
