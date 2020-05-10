import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../DetailStyles/styles';

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate('home')}>
      <Icon name="md-arrow-back" size={40} color="#192a56" />
    </TouchableOpacity>
  );
};

export default BackButton;
