import React, {useContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import {styles} from '../HomeStyles/styles';

import {GlobalContext} from '../../../context/GlobalState';
import User from './User';

const UserList = ({navigation}) => {
  const {filteredPeople, post, search} = useContext(GlobalContext);

  return (
    <FlatList
      style={styles.scrollSection}
      data={search === '' ? post : filteredPeople}
      renderItem={({item}) => <User user={item} navigation={navigation} />}
      keyExtractor={item => item.login.uuid}
    />
  );
};

export default UserList;
