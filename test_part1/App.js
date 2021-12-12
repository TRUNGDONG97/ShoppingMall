/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigation from './src/navigation/MainNavigation';
import database from '@react-native-firebase/database';
import {urlFirebase} from './src/constants/Constant';

const App: () => Node = () => {
  return (
    <>
      <StatusBar />
      <MainNavigation />
    </>
  );
};

export default App;
