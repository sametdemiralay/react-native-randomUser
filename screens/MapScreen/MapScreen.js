import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';

import {styles} from './MapScreenStyles/styles';
import MapTitle from './MapTitle';

const MapScreen = ({navigation, route}) => {
  const {user} = route.params;
  const userLat = parseInt(user.location.coordinates.latitude);
  const userLong = parseInt(user.location.coordinates.longitude);
  return (
    <View style={styles.container}>
      <MapTitle navigation={navigation} user={user} />
      <View style={styles.mapSection}>
        <MapView
          style={styles.map}
          region={{
            latitude: userLat,
            longitude: userLong,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}>
          <MapView.Marker
            coordinate={{latitude: userLat, longitude: userLong}}
            title={user.name.first}
            description={user.location.street.name}
          />
        </MapView>
      </View>
    </View>
  );
};

export default MapScreen;
