import React from 'react';
import {View} from 'react-native';
import {styles} from '../DetailStyles/styles';

import ButtonCall from './ButtonCall';
import ButtonMap from './ButtonMap';

const ButtonSection = ({user}) => {
  return (
    <View style={styles.buttonSectionContainer}>
      <ButtonMap user={user} />
      <ButtonCall user={user.phone} />
    </View>
  );
};

export default ButtonSection;
