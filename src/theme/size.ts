import {Dimensions} from 'react-native';

const screen = Dimensions.get('screen');
const window = Dimensions.get('window');

export const size = {
  screenHeight: screen.height,
  screenWidth: screen.width,
  windowWidth: window.width,
  windowHeight: window.height,
};
