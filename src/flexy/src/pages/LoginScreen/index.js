/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Logo, Mail, Key} from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [errors, setErrors] = React.useState('');

  const LoginHandler = e => {
    try {
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: pass,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.token) {
            AsyncStorage.setItem('session_id', 'session_id' + Math.random());
            navigation.replace('MainApp');
          } else {
            setErrors('Wrong Email or Password');
          }
        });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#74C6A7'} />
      <Image source={Logo} style={{marginVertical: 20}} />
      <View style={styles.sectionStyle}>
        <Mail />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType={'email-address'}
          placeholder="Email Address"
        />
      </View>
      <View style={styles.sectionStyle}>
        <Key />
        <TextInput
          style={styles.input}
          onChangeText={setPass}
          value={pass}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      <Text style={{color: '#BB0B0B'}}>{errors}</Text>
      <TouchableOpacity
        style={{
          borderRadius: 20,
          alignItems: 'center',
          backgroundColor: '#74C6A7',
          padding: 20,
          marginTop: 70,
          width: '80%',
        }}
        onPress={() => LoginHandler()}>
        <Text
          style={{fontFamily: 'Raleway-Bold', fontSize: 15, color: 'white'}}>
          LOG IN
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 54,
    margin: 12,
    flex: 1,
    padding: 10,
  },
  sectionStyle: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
