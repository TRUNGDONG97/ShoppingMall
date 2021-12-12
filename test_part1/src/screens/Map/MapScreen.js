import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {SCREEN_ROUTER} from '../../constants/Constant';
const MapScreen = ({navigation}) => {
  const listStore = [
    {
      latitude: 21.038781302418823,
      longitude: 105.79689781200787,
    },
    {
      latitude: 21.029648595218696,
      longitude: 105.7986144255909,
    },
  ];
  return (
    <View style={styles.mapWrapper}>
      <MapView
        style={styles.mapView}
        region={{
          latitude: 21.00520570378122,
          longitude: 105.79613728345386,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {listStore.map((item, index) => {
          return (
            <Marker
              onPress={() => {
                navigation.navigate(SCREEN_ROUTER.PRODUCT, {item});
              }}
              key={index}
              coordinate={item}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={{
                  uri: 'https://cdn1.vectorstock.com/i/1000x1000/41/30/red-location-pin-vector-29784130.jpg',
                }}
              />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapWrapper: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapView: {...StyleSheet.absoluteFillObject},
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'red',
  },
  pinText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default MapScreen;
