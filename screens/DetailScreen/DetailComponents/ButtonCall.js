import React from 'react';
import {Linking, Text, TouchableOpacity} from 'react-native';
import {styles} from '../DetailStyles/styles';

import Icon from 'react-native-vector-icons/Ionicons';

const ButtonCall = ({user}) => {
  const call = user;
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        Linking.openURL('tel:' + call);
      }}>
      <Icon name="md-call" size={25} color="#f6f6f6" />
      <Text style={styles.buttonText}>CALL</Text>
    </TouchableOpacity>
  );
};

export default ButtonCall;
