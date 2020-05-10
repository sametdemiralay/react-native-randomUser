import React from 'react';
import {View, Text, Modal} from 'react-native';
import {styles} from './DetailStyles/styles';

import UserImage from './DetailComponents/UserImage';
import Title from './DetailComponents/Title'
import BackButton from './DetailComponents/BackButton';
import InformationSection from './DetailComponents/InformationSection';
import ButtonSection from './DetailComponents/ButtonSection'

const Detail = ({route, navigation}) => {
  const {user} = route.params;
  return (
    <View style={styles.container}>
      <UserImage user={user} navigation={navigation} />
      <BackButton navigation={navigation} />
      <Title />
      <InformationSection user={user} />
      <ButtonSection navigation={navigation} user={user} />
    </View>
  );
};

export default Detail;
