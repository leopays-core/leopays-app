import { connect } from 'react-redux';
import UIWideScreen, {
  mapStateToProps, mapDispatchToProps
} from './UIWideScreen';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  hot(module)(UIWideScreen)
);
