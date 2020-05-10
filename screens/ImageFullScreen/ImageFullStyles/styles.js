import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  //BackButton.js
  backButton: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },

  //ImageFull.js
  imageLarge: {
    height: height,
    width: width,
    zIndex: -1,
  },
});
