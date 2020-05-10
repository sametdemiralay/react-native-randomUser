import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../DetailStyles/styles';

const Information = ({title, info}) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitleSection}>{title}</Text>
      <Icon style={styles.infoIconSection} name="md-send" size={15} />
      <Text style={styles.infoResultSection}>{info}</Text>
    </View>
  );
};

export default Information;
