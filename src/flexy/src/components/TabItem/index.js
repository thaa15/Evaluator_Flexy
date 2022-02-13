/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconChat,
  IconChatActive,
  IconHome,
  IconHomeActive,
  IconProfile,
  IconProfileActive,
  IconWallet,
  IconWalletActive,
} from '../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileActive /> : <IconProfile />;
    }
    if (label === 'Chat') {
      return isFocused ? <IconChatActive /> : <IconChat />;
    }
    if (label === 'Wallet') {
      return isFocused ? <IconWalletActive /> : <IconWallet />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text
        style={{
          color: isFocused ? '#74C6A7' : '#A4A4A4',
          fontSize: 9,
          marginTop: 2,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
