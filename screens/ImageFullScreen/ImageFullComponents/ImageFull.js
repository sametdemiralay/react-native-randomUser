import React from 'react';
import {Image} from 'react-native';
import {styles} from '../ImageFullStyles/styles';

const ImageFull = ({user}) => {
  return (
    <Image
      style={styles.imageLarge}
      source={{
        uri: user.picture.large,
      }}
    />
  );
};

export default ImageFull;
