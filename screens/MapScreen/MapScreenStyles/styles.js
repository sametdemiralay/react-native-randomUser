import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbc531',
  },

  //MapTitle.js
  titleContainer: {
    height: height * 0.15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },
  textTitle: {
    marginHorizontal: width * 0.25,
    fontSize: 21,
    color: '#192a56',
    fontFamily: 'Righteous-Regular',
  },

  mapSection: {
    ...StyleSheet.absoluteFillObject,
    height: height * 0.85,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: height * 0.15,
    zIndex: -1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
