import React from 'react';
import {View, StatusBar} from 'react-native';

import Logo from './HomeComponents/Logo';
import SearchBar from './HomeComponents/SearchBar';
import UserList from './HomeComponents/UserList';

import {styles} from './HomeStyles/styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Logo />
      <SearchBar />
      <UserList navigation={navigation} />
    </View>
  );
};

export default Home;
