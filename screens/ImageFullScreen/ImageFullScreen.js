import React from 'react';
import {View} from 'react-native';

import BackButton from './ImageFullComponents/BackButton';
import ImageFull from './ImageFullComponents/ImageFull';

const ImageFullScreen = ({route, navigation}) => {
  const {user} = route.params;
  return (
    <View>
      <BackButton navigation={navigation} />
      <ImageFull user={user} />
    </View>
  );
};

export default ImageFullScreen;
