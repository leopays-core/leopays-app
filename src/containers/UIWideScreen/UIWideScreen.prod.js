import { connect } from 'react-redux';
import UIWideScreen, {
  mapStateToProps, mapDispatchToProps
} from './UIWideScreen';


export default connect(mapStateToProps, mapDispatchToProps)(UIWideScreen);
