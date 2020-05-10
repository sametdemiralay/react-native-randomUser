import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../ImageFullStyles/styles';

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate('detail')}>
      <Icon name="md-arrow-back" size={40} color="#192a56" />
    </TouchableOpacity>
  );
};

export default BackButton;
