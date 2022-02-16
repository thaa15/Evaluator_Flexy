/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const Auth = ({navigation}) => {
  React.useEffect(() => {
    const _validationSession = async () => {
      const isLogin = await AsyncStorage.getItem('session_id');
      if (isLogin) {
        navigation.replace('MainApp');
      } else {
        navigation.replace('Login');
      }
      navigation.replace(isLogin ? 'MainApp' : 'Login');
    };
    _validationSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator />
    </View>
  );
};

export default Auth;
