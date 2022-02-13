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
import {
  Bell,
  ImageHeader2,
  Profile1,
  Edit,
  Log,
  Certificate,
  Reward,
  Leave,
} from '../../assets';
import ButtonNextTo from '../../components/ButtonNextTo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = () => {
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
          My Account
        </Text>
        <Bell style={{marginLeft: 'auto'}} />
      </ImageBackground>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: windowWidth,
            padding: 25,
            marginTop: windowHeight * 0.0536,
            alignItems: 'center',
          }}>
          <Image
            source={Profile1}
            style={{
              borderRadius: 59,
              width: 118,
              height: 118,
              overflow: 'hidden',
            }}
            resizeMode={'cover'}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: 'black',
              marginVertical: 10,
              textAlign: 'center',
            }}>
            Thariq Hadyan
          </Text>
          <View style={styles.box(true)}>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 27,
                fontWeight: 'bold',
                color: '#2D906B',
                textAlign: 'center',
              }}>
              Tier 5
            </Text>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 27,
                fontWeight: '400',
                color: 'black',
                textAlign: 'center',
              }}>
              (2561 exp points)
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Edit />
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 27,
                  fontWeight: '400',
                  color: 'black',
                  textAlign: 'center',
                  textDecorationLine: 'underline',
                }}>
                {' '}
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box(false)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <TouchableOpacity
                style={{flexDirection: 'column', alignItems: 'center'}}>
                <Log />
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Raleway-SemiBold',
                    color: '#000000',
                  }}>
                  Battle Log
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'column', alignItems: 'center'}}>
                <Reward />
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Raleway-SemiBold',
                    color: '#000000',
                  }}>
                  Flexy Reward
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'column', alignItems: 'center'}}>
                <Certificate />
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Raleway-SemiBold',
                    color: '#000000',
                  }}>
                  My Certificate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.box(false)}>
            <ButtonNextTo title="Privacy" label="Account & Privacy" />
            <ButtonNextTo title="Subscription" label="Subscription & Plan" />
            <ButtonNextTo title="Contact" label="Contact Us" />
            <ButtonNextTo title="About" label="About Us" />
            <ButtonNextTo title="Settings" label="Settings" />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: windowHeight * 0.0569,
            }}>
            <Leave />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
                color: '#BB0B0B',
                fontWeight: 'bold',
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

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
});
