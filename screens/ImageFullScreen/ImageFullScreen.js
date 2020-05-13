import React from 'react';
import {View} from 'react-native';

import BackButton from './ImageFullComponents/BackButton';
import ImageFull from './ImageFullComponents/ImageFull';

const ImageFullScreen = ({route}) => {
  const {user} = route.params;
  return (
    <View>
      <BackButton />
      <ImageFull user={user} />
    </View>
  );
};

export default ImageFullScreen;
