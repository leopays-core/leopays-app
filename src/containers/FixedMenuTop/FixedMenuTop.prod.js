import { connect } from 'react-redux';
import FixedMenuTop, {
  mapStateToProps, mapDispatchToProps
} from './FixedMenuTop';


export default connect(mapStateToProps, mapDispatchToProps)(FixedMenuTop);
