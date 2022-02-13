/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Bell, ImageHeader2} from '../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Chat = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader2} style={styles.header}>
        <Text
          style={{
            flex: 1,
            fontSize: 28,
            textAlign: 'center',
            fontFamily: 'Raleway-SemiBold',
            color: '#ffffff',
          }}>
          Messages
        </Text>
        <Bell style={{marginLeft: 'auto'}} />
      </ImageBackground>
      <ScrollView showsHorizontalScrollIndicator={false}></ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.1,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
