import uuid from 'react-native-uuid';
import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';
import * as KJUR from 'jsrsasign';
import AsyncStorage from '../../components/AsyncStorage';
import structure from '../structure';



// Header
var oHeader = { alg: 'HS256', typ: 'JWT' };
// Payload
var oPayload = {};
var tNow = KJUR.jws.IntDate.get('now');
var tEnd = KJUR.jws.IntDate.get('now + 1day');
oPayload.iss = "http://foo.com";
oPayload.sub = "mailto:mike@foo.com";
oPayload.nbf = tNow;
oPayload.iat = tNow;
oPayload.exp = tEnd;
oPayload.jti = "id123456";
oPayload.aud = "http://foo.com/employee";
// Sign JWT, password=616161
var sHeader = JSON.stringify(oHeader);
var sPayload = JSON.stringify(oPayload);
var sJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, "616161");
//http://kjur.github.io/jsrsasign/api/symbols/KEYUTIL.html#.getKey
// var prvKey = KJUR.KEYUTIL.getKey(sPKCS8PEM, "password");
//var sJWT = KJUR.jws.JWS.sign("RS256", sHeader, sPayload, prvKey);
//var isValid = KJUR.jws.JWS.verify("eyJh...", "616161", ["HS256"]);



const { fromJS, getIn, merge, toJS } = structure;

export const SET_ID = '@@device/SET_ID';
export const SET_STORAGE_DISK_MEMORY_TOTAL = '@@device/SET_STORAGE_DISK_MEMORY_TOTAL';
export const SET_STORAGE_DISK_MEMORY_FREE = '@@device/SET_STORAGE_DISK_MEMORY_FREE';


export const setId = (value) => ({
  type: SET_ID,
  payload: value,
});
export const setStorageDiskMemoryTotal = (value) => ({
  type: SET_STORAGE_DISK_MEMORY_TOTAL,
  payload: value,
});
export const setStorageDiskMemoryFree = (value) => ({
  type: SET_STORAGE_DISK_MEMORY_FREE,
  payload: value,
});


export const updateId = () => async (dispatch, getState) => {
  /*
  if (Platform.OS !== 'web') {
    const device_id_file_path = FileSystem.documentDirectory + 'device_id';
    const device_id_token_file_path = FileSystem.documentDirectory + 'device_id_token';
    let device_id_file = await FileSystem
      .getInfoAsync(device_id_file_path);
    if (device_id_file.exists) {
      console.log('device_id_file.exists === true');
      await FileSystem.readAsStringAsync(device_id_file_path);
    } else {
      console.log('device_id_file.exists === false');
      // const contents = '';
      //FileSystem.writeAsStringAsync(device_id_file_path, contents);
    }
  }
  */

  let device_id = getIn(getState(), ['device', 'id']);
  let device_id_token = getIn(getState(), ['device', 'token']);
  if (device_id_token !== null) {
    // KEYUTIL.getPEM(keyObjOrHex, formatType, passwd, encAlg, hexType, ivsaltHex)
    const kp = KJUR.KEYUTIL.generateKeypair("EC", "secp256r1"); // secp256r1, secp256k1
    const jwkPrv = KEYUTIL.getJWKFromKey(kp.prvKeyObj);
    jwkPrv.kid = KJUR.jws.JWS.getJWKthumbprint(jwkPrv);
    const jwkPub = KEYUTIL.getJWKFromKey(kp.pubKeyObj);
    jwkPub.kid = KJUR.jws.JWS.getJWKthumbprint(jwkPub);
    const pubKey = KJUR.KEYUTIL.getKey(jwkPub);
    const isValid = KJUR.jws.JWS.verify("eyJh...", pubKey, ["ES256"]);
  }
  if (device_id === null) {
    device_id = await AsyncStorage.getItem('did');
    if (device_id === null) {
      device_id = uuid.v4();
      await AsyncStorage.setItem('did', device_id);
    }
    return dispatch(setId(device_id));
  } else
    return;
};


export const updateStorageDiskMemoryTotal = () => async (dispatch, getState) => {
  if (Platform.OS !== 'web') {
    const total = getIn(getState(), ['device', 'storage', 'disk', 'memory', 'total']);
    const totalDiskCapacity = await FileSystem.getTotalDiskCapacityAsync();
    if (total !== totalDiskCapacity)
      return dispatch(setStorageDiskMemoryTotal(totalDiskCapacity));
  }
  return;
};

export const updateStorageDiskMemoryFree = () => async (dispatch, getState) => {
  if (Platform.OS !== 'web') {
    const free = getIn(getState(), ['device', 'storage', 'disk', 'memory', 'free']);
    const freeDiskStorage = await FileSystem.getFreeDiskStorageAsync();
    if (free !== freeDiskStorage)
      return dispatch(setStorageDiskMemoryFree(freeDiskStorage));
  }
  return;
};
