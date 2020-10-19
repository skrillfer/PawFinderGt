import React, { useState,useReducer } from 'react';
import { View, Text, Button } from 'react-native';
import { login } from '../../api/mock';
import EmailForm from '../../forms/login-form';
import NavigationNames from "../../navigations/NavigationNames";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
  const navigation = useNavigation();
  
  return (
    <EmailForm
      buttonText="Ingresar"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('Root')}
    >
      <Button
        title="Crear cuenta"
        onPress={() => navigation.navigate(NavigationNames.SignUp)}
      />
    </EmailForm>
  );
};

export default LoginScreen;