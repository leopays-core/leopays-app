import { connect } from 'react-redux';
import UI, {
  mapStateToProps, mapDispatchToProps
} from './UI';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(UI));
