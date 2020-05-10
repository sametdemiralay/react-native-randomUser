import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbc531',
    alignItems: 'center',
  },

  imageLarge: {
    height: width * 0.6,
    width: width * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  //BackButton.js
  backButton: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 30,
    left: 20,
  },

  //Title.js
  title: {
    color: '#192a56',
    fontFamily: 'Righteous-Regular',
    fontSize: 25,
    marginBottom: 21,
  },

  //Information.js
  infoContainer: {
    backgroundColor: '#192a56',
    width: width * 0.8,
    flexDirection: 'row',
    marginBottom: 10,
    paddingVertical: 5,
  },
  infoTitleSection: {
    flex: 3,
    alignSelf: 'center',
    color: '#fbc531',
    marginLeft: 10,
    fontFamily: 'Righteous-Regular',
    fontSize: 15,
  },
  infoIconSection: {
    flex: 1,
    alignSelf: 'center',
    color: '#fbc531',
    marginLeft: 5,
  },
  infoResultSection: {
    flex: 7,
    alignSelf: 'center',
    color: '#fbc531',
    marginLeft: 5,
    fontFamily: 'Righteous-Regular',
    fontSize: 13,
  },

  //ButtonSection.js
  buttonSectionContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  buttonContainer: {
    height: 50,
    width: width * 0.35,
    backgroundColor: '#192a56',
    marginHorizontal: width * 0.05,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fbc531',
    fontFamily: 'Righteous-Regular',
    fontSize: 20,
    marginLeft: 10,
  },
});
