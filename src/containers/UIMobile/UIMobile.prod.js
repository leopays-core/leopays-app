import { connect } from 'react-redux';
import UIMobile, {
  mapStateToProps, mapDispatchToProps
} from './UIMobile';


export default connect(mapStateToProps, mapDispatchToProps)(UIMobile);
