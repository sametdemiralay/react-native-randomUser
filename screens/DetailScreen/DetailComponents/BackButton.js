import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../DetailStyles/styles';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate('home')}>
      <Icon name="md-arrow-back" size={40} color="#5d13e7" />
    </TouchableOpacity>
  );
};

export default BackButton;
