import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './MapScreenStyles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const MapTitle = ({user}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('detail')}>
        <Icon name="md-arrow-back" size={40} color="#5d13e7" />
      </TouchableOpacity>

      <Text style={styles.textTitle}>
        {user.location.state}, {user.location.country}{' '}
      </Text>
    </View>
  );
};

export default MapTitle;
