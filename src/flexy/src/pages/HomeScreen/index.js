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
  ImageHeader,
  Bell,
  Identity,
  Book,
  News,
  Games,
  Leaderboard,
  Invite,
  Qna,
} from '../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Raleway-Bold',
                color: '#ffffff',
              }}>
              Hello, Thariq!
            </Text>
            <Bell style={{marginLeft: 'auto'}} />
          </View>
          <View
            style={{
              backgroundColor: '#FCF292',
              borderRadius: 9,
              marginTop: windowHeight * 0.045,
              padding: 12,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Identity style={{marginRight: 8}} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Raleway-Bold',
                color: '#74C6A7',
              }}>
              A13H2DK
            </Text>
          </View>
          <Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Raleway-Regular',
                color: '#ffffff',
              }}>
              Subscription:{' '}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Raleway-Bold',
                color: '#ffffff',
              }}>
              Basic
            </Text>
          </Text>
          <View style={{alignItems: 'center'}}>
            <View style={styles.box(true, true)}>
              <TouchableOpacity
                style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image source={Book} />
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: 'Raleway-SemiBold',
                    color: '#000000',
                  }}>
                  Modules
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image source={Games} />
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Raleway-SemiBold',
                    color: '#000000',
                  }}>
                  Play
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image source={News} />
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: 'Raleway-SemiBold',
                    color: '#000000',
                  }}>
                  News
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={{width: windowWidth, padding: 41}}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.box(true, false)}>
              <View style={styles.boxContent}>
                <Image source={Leaderboard} />
                <Text style={styles.textContent}>Leaderboard</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.box(false, false)}>
              <View style={styles.boxContent}>
                <Image source={Invite} />
                <Text style={styles.textContent}>Invite Friends</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.box(false, false)}>
              <View style={styles.boxContent}>
                <Image source={Qna} />
                <Text style={styles.textContent}>FAQ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.41,
    padding: 41,
  },
  box: (isTop, Top) => ({
    flexDirection: 'row',
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 3,
    marginVertical: 'auto',
    marginTop: isTop ? windowHeight * 0.0402 : windowHeight * 0.0045,
    borderRadius: Top ? 20 : 0,
    backgroundColor: '#ffffff',
    padding: 28,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  boxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginVertical: 'auto',
  },
  textContent: {
    fontSize: 18,
    marginLeft: 7,
    fontFamily: 'Raleway-Bold',
    color: '#000000',
    width: windowWidth * 0.301,
  },
});
