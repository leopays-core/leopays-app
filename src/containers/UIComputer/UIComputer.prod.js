import { connect } from 'react-redux';
import UIComputer, {
  mapStateToProps, mapDispatchToProps
} from './UIComputer';


export default connect(mapStateToProps, mapDispatchToProps)(UIComputer);
