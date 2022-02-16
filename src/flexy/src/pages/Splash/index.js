/* eslint-disable prettier/prettier */
import {StyleSheet, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SplashBackground, logoFlexy} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Auth');
    }, 3000);
  }, [navigation]);
  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={logoFlexy} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 251,
  },
});
