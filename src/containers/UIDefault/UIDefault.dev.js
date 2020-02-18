import { connect } from 'react-redux';
import UIDefault, {
  mapStateToProps, mapDispatchToProps
} from './UIDefault';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  hot(module)(UIDefault)
);
