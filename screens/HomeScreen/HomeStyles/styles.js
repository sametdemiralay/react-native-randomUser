import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
  },

  //Logo.js
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  logoText: {
    fontFamily: 'Monoton-Regular',
    fontSize: 45,
    color: '#5d13e7',
  },

  //SearchBar.js
  searchBar: {
    height: 50,
    width: width * 0.9,
    backgroundColor: '#FFF',
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 17,
    paddingHorizontal: 15,
    elevation: 8,
    fontWeight: 'bold',
    color: '#5d13e7',
  },

  //UserList.js
  scrollSection: {
    marginVertical: 20,
  },
  userContainer: {
    height: height * 0.2,
    width: width * 0.9,
    backgroundColor: '#5d13e7',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  userImage: {
    height: height * 0.18,
    width: width * 0.3,
    marginLeft: 10,
    borderRadius: 10,
  },
  userText: {
    fontSize: 23,
    color: '#f6f6f6',
    marginHorizontal: 20,
    fontFamily: 'Righteous-Regular',
  },

  //User.js

  
});
