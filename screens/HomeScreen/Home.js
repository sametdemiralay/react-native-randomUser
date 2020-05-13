import React from 'react';
import {View, StatusBar} from 'react-native';

import Logo from './HomeComponents/Logo';
import SearchBar from './HomeComponents/SearchBar';
import UserList from './HomeComponents/UserList';

import {styles} from './HomeStyles/styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Logo />
      <SearchBar />
      <UserList />
    </View>
  );
};

export default Home;
