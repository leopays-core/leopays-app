import { connect } from 'react-redux';
import Footer, {
  mapStateToProps, mapDispatchToProps
} from './Footer';
import { hot } from 'react-hot-loader';


export default connect(mapStateToProps, mapDispatchToProps)(
  hot(module)(Footer)
);
