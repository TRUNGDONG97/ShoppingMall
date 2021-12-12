import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {firebase} from '@react-native-firebase/database';

const ProductScreen = () => {
  useEffect(() => {
    const database = firebase
      .app()
      .database(
        'https://test-2fbee-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('/product');
    console.log('database');
    return () => {};
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>ProductScreen</Text>
    </View>
  );
};

export default ProductScreen;
