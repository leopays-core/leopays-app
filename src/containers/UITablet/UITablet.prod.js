import { connect } from 'react-redux';
import UITablet, {
  mapStateToProps, mapDispatchToProps
} from './UITablet';


export default connect(mapStateToProps, mapDispatchToProps)(UITablet);
