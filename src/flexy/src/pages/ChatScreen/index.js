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
  TextInput,
} from 'react-native';
import React from 'react';
import {Bell, ImageHeader2, Friend, Profile2, Profile3} from '../../assets';
import ChatSection from '../../components/ChatSection';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Chat = () => {
  const [search, setSearch] = React.useState('');
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
        <TouchableOpacity style={{marginLeft: 'auto'}}>
          <Bell />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.container}>
        <View
          style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={search}
            placeholder="Search..."
          />
          <TouchableOpacity>
            <Friend />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <ChatSection
            photo={Profile2}
            name="John Tara"
            lastChat={'Aku kesusahan!'}
            newMessage={true}
          />
          <ChatSection
            photo={Profile3}
            name="Nina"
            lastChat={'Tau ga sih? Laporan Keuangan Q3 saham ARTO bagus banget'}
            newMessage={false}
          />
        </View>
      </ScrollView>
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
  input: {
    height: 54,
    margin: 12,
    width: '80%',
    padding: 10,
    backgroundColor: 'rgba(229, 229, 229, 0.45)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,
  },
  container: {
    width: windowWidth,
    padding: 5,
    alignItems: 'center',
    marginTop: windowHeight * 0.027,
  },
});
