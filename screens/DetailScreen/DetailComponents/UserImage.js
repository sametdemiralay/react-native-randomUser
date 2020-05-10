import React from 'react';
import {TouchableOpacity, ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../DetailStyles/styles';

const UserImage = ({user, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('imageFullScreen', {
          user: user,
        })
      }>
      <ImageBackground
        style={styles.imageLarge}
        source={{
          uri: user.picture.large,
        }}>
        <Icon name="md-resize" size={40} color="rgba(223, 230, 233,0.5)" />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default UserImage;
