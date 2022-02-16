/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  ImageBackground,
} from 'react-native';
import {Profile4, Profile5, Profile6, Profile7} from '../../../assets';
import {LogoHeader, Like, Nope} from '../../../assets';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Users = [
  {
    id: '1',
    uri: Profile4,
    name: 'Kezia',
    age: 24,
    rank: 'Tier III',
    hobbies: ['Fashion', 'Product'],
  },
  {
    id: '2',
    uri: Profile5,
    name: 'Erica',
    age: 20,
    rank: 'Tier IV',
    hobbies: ['Food', 'Reading'],
  },
  {
    id: '3',
    uri: Profile6,
    name: 'Joh Tara',
    age: 24,
    rank: 'Tier IV',
    hobbies: ['Fishing', 'Billiard'],
  },
  {
    id: '4',
    uri: Profile7,
    name: 'Nick',
    age: 21,
    rank: 'Tier V',
    hobbies: ['Basket', 'Swim'],
  },
];

const SwipeGame = () => {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const position = React.useRef(new Animated.ValueXY()).current;
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
          position.setValue({x: gestureState.dx, y: gestureState.dy});
        },
        onPanResponderRelease: (evt, gestureState) => {
          if (gestureState.dx > 120) {
            Animated.spring(position, {
              toValue: {x: SCREEN_WIDTH + 100, y: gestureState.dy},
              useNativeDriver: true,
            }).start(() => {
              let idx = currentIdx;
              idx++;
              setCurrentIdx(idx);
              position.setValue({x: 0, y: 0});
            });
          } else if (gestureState.dx < -120) {
            Animated.spring(position, {
              toValue: {x: -SCREEN_WIDTH - 100, y: gestureState.dy},
              useNativeDriver: true,
            }).start(() => {
              let idx = currentIdx;
              idx++;
              setCurrentIdx(idx);
              position.setValue({x: 0, y: 0});
            });
          } else {
            Animated.spring(position, {
              toValue: {x: 0, y: 0},
              friction: 4,
              useNativeDriver: true,
            }).start();
          }
        },
      }),
    [currentIdx],
  );
  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  });
  const likeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });
  const nopeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });
  const nextCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });
  const nextCardScale = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          width: SCREEN_WIDTH,
          backgroundColor: 'white',
        }}>
        <Image source={LogoHeader} style={{alignItems: 'center'}} />
      </View>
      <View style={{flex: 1}}>
        {Users.map((item, i) => {
          if (i < currentIdx) {
            return null;
          } else if (currentIdx === i) {
            return (
              <Animated.View
                {...panResponder.panHandlers}
                style={[
                  {
                    transform: [
                      {
                        rotate: rotate,
                      },
                      ...position.getTranslateTransform(),
                    ],
                  },
                  {
                    height: SCREEN_HEIGHT - 120,
                    width: SCREEN_WIDTH,
                    position: 'absolute',
                  },
                ]}
                key={i}>
                <Animated.View
                  style={{
                    opacity: likeOpacity,
                    //transform: [{rotate: '-30deg'}],
                    position: 'absolute',
                    top: 50,
                    left: 40,
                    zIndex: 1000,
                  }}>
                  <Image style={{resizeMode: 'cover'}} source={Like} />
                </Animated.View>
                <Animated.View
                  style={{
                    opacity: nopeOpacity,
                    //transform: [{rotate: '30deg'}],
                    position: 'absolute',
                    top: 50,
                    right: 40,
                    zIndex: 1000,
                  }}>
                  <Image style={{resizeMode: 'cover'}} source={Nope} />
                </Animated.View>
                <ImageBackground
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: 'cover',
                  }}
                  source={item.uri}>
                  <View
                    style={{
                      marginTop: 'auto',
                      height: 130,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 24,
                        color: 'white',
                      }}>
                      {item.name}, {item.age}
                    </Text>
                    <Text style={{fontSize: 13, color: 'white'}}>
                      {item.rank}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {item.hobbies.map((it, id) => (
                        <View
                          style={{
                            width: 75,
                            backgroundColor: '#74C6A7',
                            marginRight: 10,
                            padding: 5,
                          }}
                          key={id}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'bold',
                              color: 'white',
                            }}>
                            {it}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </ImageBackground>
              </Animated.View>
            );
          } else {
            return (
              <Animated.View
                style={[
                  {
                    opacity: nextCardOpacity,
                    transform: [{scale: nextCardScale}],
                    height: SCREEN_HEIGHT - 120,
                    width: SCREEN_WIDTH,
                    position: 'absolute',
                  },
                ]}
                key={i}>
                <ImageBackground
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: 'cover',
                  }}
                  source={item.uri}>
                  <View
                    style={{
                      marginTop: 'auto',
                      height: 130,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 24,
                        color: 'white',
                      }}>
                      {item.name}, {item.age}
                    </Text>
                    <Text style={{fontSize: 13, color: 'white'}}>
                      {item.rank}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {item.hobbies.map((it, id) => (
                        <View
                          style={{
                            width: 75,
                            backgroundColor: '#74C6A7',
                            marginRight: 10,
                            padding: 5,
                          }}
                          key={id}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'bold',
                              color: 'white',
                            }}>
                            {it}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </ImageBackground>
              </Animated.View>
            );
          }
        }).reverse()}
      </View>
      <View style={{height: 100}} />
    </View>
  );
};

export default SwipeGame;
