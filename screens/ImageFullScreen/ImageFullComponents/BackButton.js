import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../ImageFullStyles/styles';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate('detail')}>
      <Icon name="md-arrow-back" size={40} color="#5d13e7" />
    </TouchableOpacity>
  );
};

export default BackButton;
