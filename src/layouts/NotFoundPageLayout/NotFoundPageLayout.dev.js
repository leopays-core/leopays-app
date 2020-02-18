import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import NotFoundPageLayout, {
  mapStateToProps, mapDispatchToProps
} from './NotFoundPageLayout';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  withTranslation()(
    hot(module)(NotFoundPageLayout)
  )
);
