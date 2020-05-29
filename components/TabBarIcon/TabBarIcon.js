import * as React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';



export default function TabBarIcon(props) {
  return (
    <FontAwesome
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );

  // onPress={this.loginWithFacebook}
  return (
    <FontAwesome.Button name="facebook" backgroundColor="#3b5998" >
      Login with Facebook
    </FontAwesome.Button>
  );
}
