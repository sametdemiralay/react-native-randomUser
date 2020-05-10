import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../DetailStyles/styles';

import ButtonCall from './ButtonCall';
import ButtonMap from './ButtonMap'

const ButtonSection = ({user, navigation}) => {
  return (
    <View style={styles.buttonSectionContainer}>
      <ButtonMap navigation={navigation} user={user} />
      <ButtonCall user={user.phone} />
    </View>
  );
};

export default ButtonSection;
