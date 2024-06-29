import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

export default function RegistrationForm() {
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center'}}>
        <Image
          style={styles.image}
          source={{ uri: 'https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?t=st=1719638952~exp=1719642552~hmac=db8a1264da495bd86ef5981c57a9cd19751d0f868708612b21920c99f835c4f3&w=740' }}
        />
      </View>

      <View style={{ marginTop:100}}>
        <Text style={styles.heading}>Login</Text>

        <TextInput
          placeholder='Email'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
   padding:20,
  },
  image: {
    marginTop:10,
    width: 300,
    height: 300,
    resizeMode: 'contain',

  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00796b',
  },
});
