/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, Platform} from 'react-native';

import MainNavigation from './src/navigation/MainNavigation';
import {iosConfig, androidConfig} from './src/constants/Constant';
import firebase from '@react-native-firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = Platform.OS === 'ios' ? iosConfig : androidConfig;

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App: () => Node = () => {
  return (
    <>
      <StatusBar />
      <MainNavigation />
    </>
  );
};

export default App;
