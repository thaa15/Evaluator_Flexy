/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Jago, Net, Bri, Antam, NextTo} from '../../assets';

const windowWidth = Dimensions.get('window').width;

const ButtonBuyTo = ({title, labelTitle, labelDesc, Width, harga, stock}) => {
  const [up, setUp] = useState(false);
  const Icon = () => {
    if (title === 'Jago') {
      return (
        <Image
          source={Jago}
          style={{width: windowWidth * 0.135}}
          resizeMode={'contain'}
        />
      );
    }
    if (title === 'Net') {
      return (
        <Image
          source={Net}
          style={{width: windowWidth * 0.135}}
          resizeMode={'contain'}
        />
      );
    }
    if (title === 'Bri') {
      return (
        <Image
          source={Bri}
          style={{width: windowWidth * 0.135}}
          resizeMode={'contain'}
        />
      );
    }
    if (title === 'Antam') {
      return (
        <Image
          source={Antam}
          style={{width: windowWidth * 0.135}}
          resizeMode={'contain'}
        />
      );
    }
    return (
      <Image
        source={Jago}
        style={{width: windowWidth * 0.135}}
        resizeMode={'contain'}
      />
    );
  };

  useEffect(() => {
    if (stock[0] === '-') {
      setUp(false);
    } else {
      setUp(true);
    }
  }, [stock]);
  return (
    <TouchableOpacity style={styles.container}>
      <Icon />
      <View style={{marginLeft: 20, width: Width}}>
        <Text style={styles.textedTitle(false)}>{labelTitle}</Text>
        <Text style={styles.textedTitle(true)}>{labelDesc}</Text>
      </View>
      <View
        style={{
          marginLeft: 'auto',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginRight: 10}}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 9,
              textAlign: 'right',
              color: 'black',
            }}>
            {harga}
          </Text>
          <Text style={styles.textPrice(up)}>{stock}</Text>
        </View>
        <NextTo />
        <Text
          style={{
            fontSize: 11,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 4,
          }}>
          Buy
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonBuyTo;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    width: '100%',
  },
  textedTitle: isDesc => ({
    fontSize: 9,
    fontWeight: isDesc ? '400' : 'bold',
    color: 'black',
  }),
  textPrice: isUp => ({
    color: isUp ? '#74C6A7' : 'rgba(255, 0, 0, 0.81)',
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'right',
  }),
});
