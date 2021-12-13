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

const App: () => Node = () => {
  return (
    <>
      <StatusBar />
      <MainNavigation />
    </>
  );
};

export default App;
