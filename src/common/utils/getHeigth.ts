import { Dimensions, Platform } from 'react-native';

export const getWindowHeight = () => {
  return Platform.OS === 'ios' ? Dimensions.get('window').height - 60 : Dimensions.get('window').height;
};
