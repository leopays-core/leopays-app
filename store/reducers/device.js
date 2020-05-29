import Immutable from 'immutable';
import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import {
  SET_ID, SET_STORAGE_DISK_MEMORY_TOTAL, SET_STORAGE_DISK_MEMORY_FREE,
} from '../actions/device';




const createReducer = (structure) => {
  const { fromJS, getIn, setIn, merge, toJS } = structure;

  const initialState = Immutable.Map({
    id: null,
    token: null, // JWT
    "platform": {
      "OS": Platform.OS, // "ios",
      "Version": Platform.Version, //"13.1.2",
      "constants": Platform.constants | {},// { "forceTouchAvailable": true, "interfaceIdiom": "phone", "isTesting": false, "osVersion": "13.1.2", "reactNativeVersion": { "major": 0, "minor": 61, "patch": 4, }, "systemName": "iOS", },
      "isPad": Platform.isPad | false, // false,
      "isTV": Platform.isTV | false, // false,
      "isTVOS": Platform.isTVOS | false, // false,
      "isTesting": Platform.isTesting | false, // false,
    },
    storage: {
      disk: {
        memory: {
          total: null,
          free: null,
        },
      },
    },
    directory: {
      cache: FileSystem.cacheDirectory, // null for web
      document: FileSystem.documentDirectory, // null for web
    },
  });


  return (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case SET_ID:
        //return merge(state, { id: payload });
        return setIn(state, ['id'], payload);
      case SET_STORAGE_DISK_MEMORY_TOTAL:
        return setIn(state, ['storage', 'disk', 'memory', 'total'], payload);
      case SET_STORAGE_DISK_MEMORY_FREE:
        return setIn(state, ['storage', 'disk', 'memory', 'free'], payload);
      default:
        return state;
    }
  };
}

export default createReducer;
