/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import {Profile4, Profile5, Profile6, Profile7} from '../../../assets';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Users = [
  {id: '1', uri: Profile4},
  {id: '2', uri: Profile5},
  {id: '3', uri: Profile6},
  {id: '4', uri: Profile7},
];

const SwipeGame = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 60}} />
      <View style={{flex: 1}}>
        {Users.map((item, i) => {
          return (
            <Animated.View
              style={[
                {
                  height: SCREEN_HEIGHT - 120,
                  width: SCREEN_WIDTH,
                  position:'absolute'
                },
              ]}
              key={i}>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: 'cover',
                }}
                source={item.uri}
              />
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export default SwipeGame;

const styles = StyleSheet.create({});
