import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {GlobalProvider} from './context/GlobalState';

import Home from './screens/HomeScreen/Home';
import Detail from './screens/DetailScreen/Detail';
import ImageFullScreen from './screens/ImageFullScreen/ImageFullScreen';
import MapScreen from './screens/MapScreen/MapScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="detail" component={Detail} />
          <Stack.Screen name="imageFullScreen" component={ImageFullScreen} />
          <Stack.Screen name="map" component={MapScreen} />
        </Stack.Navigator>
      </GlobalProvider>
    </NavigationContainer>
  );
}

export default App;
