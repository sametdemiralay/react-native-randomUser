import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../HomeStyles/styles';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>RANDOM</Text>
      <Text style={styles.logoText}>USER</Text>
    </View>
  );
};

export default Logo;
