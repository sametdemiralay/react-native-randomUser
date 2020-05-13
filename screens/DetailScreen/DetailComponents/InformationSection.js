import React from 'react';
import {ScrollView} from 'react-native';

import Information from './Information';

const InformationSection = ({user}) => {
  return (
    <ScrollView>
      <Information title={'NAME'} info={user.name.first} />
      <Information title={'SURNAME'} info={user.name.last} />
      <Information title={'USERNAME'} info={user.login.username} />
      <Information title={'CITY'} info={user.location.state} />
      <Information title={'COUNTRY'} info={user.location.country} />
      <Information title={'AGE'} info={user.dob.age} />
      <Information title={'PHONE'} info={user.phone} />
    </ScrollView>
  );
};

export default InformationSection;
