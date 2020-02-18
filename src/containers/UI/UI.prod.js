import { connect } from 'react-redux';
import UI, {
  mapStateToProps, mapDispatchToProps
} from './UI';


export default connect(mapStateToProps, mapDispatchToProps)(UI);
