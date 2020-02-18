import { connect } from 'react-redux';
import UIComputer, {
  mapStateToProps, mapDispatchToProps
} from './UIComputer';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  hot(module)(UIComputer)
);
