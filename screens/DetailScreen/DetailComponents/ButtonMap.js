import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../DetailStyles/styles';

import Icon from 'react-native-vector-icons/Ionicons';

const ButtonMap = ({navigation, user}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate('map', {user: user})}>
      <Icon name="md-map" size={25} color="#fbc531" />
      <Text style={styles.buttonText}>MAP</Text>
    </TouchableOpacity>
  );
};

export default ButtonMap;
