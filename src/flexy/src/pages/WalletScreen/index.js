/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  Bell,
  ImageHeader2,
  Coins,
  Deposit,
  Exchange,
  History,
} from '../../assets';
import ButtonBuyTo from '../../components/ButtonBuyTo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Wallet = () => {
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
          Wallets
        </Text>
        <TouchableOpacity style={{marginLeft: 'auto'}}>
          <Bell />
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            padding: 25,
            width: windowWidth,
            marginTop: windowHeight * 0.0536,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}>
          <Text style={{fontFamily: 'Raleway-Medium', lineHeight: 16}}>
            Your Flexy Points
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Coins />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                color: 'black',
                marginLeft: 5,
              }}>
              2,000,000
            </Text>
          </View>
        </View>
        <View
          style={{
            width: windowWidth,
            padding: 25,
            alignItems: 'center',
          }}>
          <View style={styles.box(true)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <TouchableOpacity
                style={{flexDirection: 'column', alignItems: 'center'}}>
                <Deposit />
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Raleway-SemiBold',
                    color: '#000000',
                  }}>
                  Top Up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'column', alignItems: 'center'}}>
                <Exchange />
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Raleway-SemiBold',
                    color: '#000000',
                  }}>
                  Exchange
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'column', alignItems: 'center'}}>
                <History />
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Raleway-SemiBold',
                    color: '#000000',
                  }}>
                  History
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: windowHeight * 0.0803,
            }}>
            <TouchableOpacity style={styles.button(true)}>
              <Text style={styles.buttonText(true)}>STOCK PICKS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button(false)}>
              <Text style={styles.buttonText(false)}>CRYPTO PICKS</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: windowWidth,
              padding: 8,
              alignItems: 'center',
            }}>
            <View style={styles.box(true)}>
              <ButtonBuyTo
                title="Jago"
                labelTitle="ARTO"
                labelDesc="PT Bank Jago Tbk"
                Width={windowWidth * 0.147}
                harga="16,700"
                stock="+100,00 (0,60%)"
              />
              <ButtonBuyTo
                title="Antam"
                labelTitle="ANTM"
                labelDesc="PT Aneka Tambang Tbk"
                Width={windowWidth * 0.147}
                harga="1,810"
                stock="-30,00 (1,63%)"
              />
              <ButtonBuyTo
                title="Net"
                labelTitle="NETV"
                labelDesc="PT Net Visi Media Tbk"
                Width={windowWidth * 0.147}
                harga="560"
                stock="-40,00 (6,67%)"
              />
              <ButtonBuyTo
                title="Bri"
                labelTitle="BBRI"
                labelDesc="PT Bank Rakyat Indonesia Tbk"
                Width={windowWidth * 0.147}
                harga="4,210"
                stock="+80,00 (1,94%)"
              />
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#74C6A7',
                    textDecorationLine: 'underline',
                    fontSize: 9,
                    marginTop: windowHeight * 0.002,
                  }}>
                  Load More...
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Wallet;

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
  box: isTop => ({
    flexDirection: 'column',
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.15,
    elevation: 3,
    marginVertical: 'auto',
    marginTop: isTop ? windowHeight * 0.00344 : windowHeight * 0.0444,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  button: isActive => ({
    borderRadius: 20,
    backgroundColor: isActive ? '#74C6A7' : '#E0E0E0',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    paddingHorizontal: 18,
    elevation: 6,
    paddingVertical: 6,
    marginLeft: isActive ? 0 : 10,
  }),
  buttonText: isActive => ({
    color: isActive ? 'white' : '#969696',
    fontFamily: 'Raleway-Bold',
    fontSize: 14,
  }),
});
