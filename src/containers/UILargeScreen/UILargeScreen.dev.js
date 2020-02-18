import { connect } from 'react-redux';
import UILargeScreen, {
  mapStateToProps, mapDispatchToProps
} from './UILargeScreen';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  hot(module)(UILargeScreen)
);
