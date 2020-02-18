import { connect } from 'react-redux';
import UITablet, {
  mapStateToProps, mapDispatchToProps
} from './UITablet';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  hot(module)(UITablet)
);
