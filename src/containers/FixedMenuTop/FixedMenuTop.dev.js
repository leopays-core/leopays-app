import { connect } from 'react-redux';
import FixedMenuTop, {
  mapStateToProps, mapDispatchToProps
} from './FixedMenuTop';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  hot(module)(FixedMenuTop)
);
