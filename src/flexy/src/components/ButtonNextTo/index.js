/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Privacy,
  Subscriptions,
  Contact,
  About,
  Setting,
  NextTo,
} from '../../assets';

const ButtonNextTo = ({title, label}) => {
  const Icon = () => {
    if (title === 'Privacy') {
      return <Privacy />;
    }
    if (title === 'Subscription') {
      return <Subscriptions />;
    }
    if (title === 'Contact') {
      return <Contact />;
    }
    if (title === 'About') {
      return <About />;
    }
    if (title === 'Setting') {
      return <Setting />;
    }
    return <Privacy />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Icon />
      <Text style={styles.texted}>{label}</Text>
      <NextTo style={{marginLeft: 'auto'}} />
    </TouchableOpacity>
  );
};

export default ButtonNextTo;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    width: '100%',
  },
  texted: {
    fontSize: 15,
    lineHeight: 27,
    fontWeight: '400',
    color: 'black',
    textDecorationLine: 'underline',
    marginLeft: 20,
  },
});
