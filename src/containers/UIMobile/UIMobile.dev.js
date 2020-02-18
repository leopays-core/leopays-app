import { connect } from 'react-redux';
import UIMobile, {
  mapStateToProps, mapDispatchToProps
} from './UIMobile';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  hot(module)(UIMobile)
);
