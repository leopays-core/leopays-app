
import { AsyncStorage } from 'react-native';
import AppJSON from '../../app.json';



const prefix = '@' + AppJSON.expo.scheme;

const _getItem = async (key, callback) => {
  try {
    const _key = `${prefix}:${key}`;
    const value = await AsyncStorage.getItem(_key, callback);
    if (value !== null) {
      // We have data!!
      //console.log(value);
    }
    return value;
  } catch (error) {
    throw new Error(error);
  }
};

const _setItem = async (key, value, callback) => {
  try {
    const _key = `${prefix}:${key}`;
    return AsyncStorage.setItem(_key, value, callback);
  } catch (error) {
    throw new Error(error);
  }
};

const _removeItem = async (key, callback) => {
  try {
    const _key = `${prefix}:${key}`;
    return AsyncStorage.removeItem(_key, callback);
  } catch (error) {
    throw new Error(error);
  }
};

const _mergeItem = async (key, value, callback) => {
  try {
    const _key = `${prefix}:${key}`;
    return AsyncStorage.mergeItem(_key, value, callback);
  } catch (error) {
    throw new Error(error);
  }
};

// Erases all AsyncStorage for all clients, libraries, etc.
const _clear = async (callback) => {
  try {
    return AsyncStorage.clear(callback);
  } catch (error) {
    throw new Error(error);
  }
};


const _getAllKeys = async (callback) => {
  try {
    return AsyncStorage.getAllKeys(callback);
  } catch (error) {
    throw new Error(error);
  }
};



export default {
  getItem: _getItem,
  setItem: _setItem,
  removeItem: _removeItem,
  mergeItem: _mergeItem,
  //clear: _clear,
  getAllKeys: _getAllKeys,
};
