import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import axios from 'axios';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [phone, setPhone] = useState(''),
    [age, setAge] = useState(''),
    [address, setAddress] = useState('')

  const _onSignUpPressed = () => {
    // if (confirm('가입 하시겠습니까?')) {
    axios
      .post('http://localhost:3000/auth/signup', {
        username,
        password,
        email,
        phone,
        age,
        address
      })
      .then((response) => {
        console.log("usernamelog: ", response.data.username)
        console.log("passwordlog: ", response.data.password)
        console.log("emaillog: ", response.data.email)
        console.log("phonelog: ", response.data.phone)
        console.log("agelog: ", response.data.age)
        console.log("addresslog: ", response.data.address)
        alert('가입이 완료되었습니다.')
        navigation.navigate('LoginScreen')
      })
      .catch((err) => {
        console.log("Fail Insert:", err)
        alert('잘못된 방식입니다. 다시 시도해주세요.')
      })
    console.log('Success Insert')
    // navigation.navigate('LoginScreen')
    // }
  }

  return (
    <ScrollView>
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label="Name"
        value={username}
        // returnKeyType="next"
        onChangeText={setUsername}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        // autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        label="Age"
        returnKeyType="next"
        value={age}
        onChangeText={setAge}
      />

      <TextInput
        label="Address"
        returnKeyType="next"
        value={address}
        onChangeText={setAddress}
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>이미 회원이신가요? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
