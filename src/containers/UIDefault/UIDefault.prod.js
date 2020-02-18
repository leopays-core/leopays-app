import { connect } from 'react-redux';
import UIDefault, {
  mapStateToProps, mapDispatchToProps
} from './UIDefault';


export default connect(mapStateToProps, mapDispatchToProps)(UIDefault);
