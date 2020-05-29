import { Alert, Platform } from 'react-native';


// alert(title, message?, buttons?, options?)

export default Alert;
export const alert = Alert.alert;
/*
Alert.alert(
  'Alert',
  'Not ready',
  [
    { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ],
  { cancelable: false }
)
*/