import React, {useState, useContext} from 'react';
import {TextInput, View, Button} from 'react-native';
import {styles} from '../HomeStyles/styles';
import {GlobalContext} from '../../../context/GlobalState';

const SearchBar = () => {
  const { setSearch} = useContext(GlobalContext);
  return (
    <View>
      <TextInput
        style={styles.searchBar}
        onChangeText={val => setSearch(val)}
      />
    </View>
  );
};

export default SearchBar;
