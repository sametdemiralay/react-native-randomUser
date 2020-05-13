import React from 'react';
import {View} from 'react-native';
import {styles} from './DetailStyles/styles';

import UserImage from './DetailComponents/UserImage';
import Title from './DetailComponents/Title';
import BackButton from './DetailComponents/BackButton';
import InformationSection from './DetailComponents/InformationSection';
import ButtonSection from './DetailComponents/ButtonSection';

const Detail = ({route}) => {
  const {user} = route.params;
  return (
    <View style={styles.container}>
      <UserImage user={user} />
      <BackButton />
      <Title />
      <InformationSection user={user} />
      <ButtonSection user={user} />
    </View>
  );
};

export default Detail;
