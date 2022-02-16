/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Text, View, Image, StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import {Check} from '../../assets';

const ChatSection = ({photo, name, lastChat, newMessage}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: '95%',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingBottom: 15,
      }}>
      <Image
        source={photo}
        style={{
          borderRadius: 33,
          width: 66,
          height: 66,
          overflow: 'hidden',
        }}
        resizeMode="contain"
      />
      <View style={{marginLeft: 13, width: '100%'}}>
        <Text
          style={{fontFamily: 'Raleway-Bold', fontSize: 16, color: 'black'}}>
          {name}
        </Text>
        <Text
          style={{
            fontFamily: 'Raleway-Regular',
            fontSize: 12,
            color: 'black',
            width: '50%',
          }}>
          {lastChat}
        </Text>
      </View>
      <View style={{marginLeft: 'auto'}}>
        <Text style={styles.readStat(newMessage)}>11.15</Text>
        {newMessage ? <Text style={styles.circle}>2</Text> : <Check />}
      </View>
    </TouchableOpacity>
  );
};

export default ChatSection;

const styles = StyleSheet.create({
  readStat: isNew => ({
    color: isNew ? '#BB0B0B' : '#90908E',
    fontFamily: 'Raleway-Medium',
  }),
  circle: {
    backgroundColor: '#BB0B0B',
    borderRadius: 100,
    textAlign: 'center',
    paddingVertical: 5,
    marginTop: 3,
    color: 'white',
    fontWeight: 'bold',
  },
});
