import { connect } from 'react-redux';
import UILargeScreen, {
  mapStateToProps, mapDispatchToProps
} from './UILargeScreen';


export default connect(mapStateToProps, mapDispatchToProps)(UILargeScreen);
