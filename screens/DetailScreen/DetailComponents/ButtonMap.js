import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../DetailStyles/styles';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

const ButtonMap = ({user}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate('map', {user: user})}>
      <Icon name="md-map" size={25} color="#f6f6f6" />
      <Text style={styles.buttonText}>MAP</Text>
    </TouchableOpacity>
  );
};

export default ButtonMap;
