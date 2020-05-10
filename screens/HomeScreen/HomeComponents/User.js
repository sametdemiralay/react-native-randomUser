import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from '../HomeStyles/styles';

const User = ({navigation, user}) => {
  return (
    <TouchableOpacity
      style={styles.userContainer}
      onPress={() =>
        navigation.navigate('detail', {
          user: user,
        })
      }>
      <Image
        style={styles.userImage}
        source={{
          uri: user.picture.medium,
        }}
      />
      <Text style={styles.userText}>
        {user.name.first} {user.name.last}
      </Text>
    </TouchableOpacity>
  );
};

export default User;
