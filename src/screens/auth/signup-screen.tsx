import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createAccount } from '../../api/mock';
import EmailForm from '../../forms/login-form';
import SignUpForm from '../../forms/signup-form';
import { useNavigation } from "@react-navigation/native";
import NavigationNames from "../../navigations/NavigationNames";
import { ScrollView } from 'react-native-gesture-handler';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <SignUpForm 
        buttonText="Sign up"
        onAuthentication={() => navigation.navigate(NavigationNames.HomeScreen)}>
      </SignUpForm>
    </ScrollView>
  );
};

export default SignUp;
 /*<EmailForm
      buttonText="Sign up"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate(NavigationNames.HomeScreen)}
    >
      <Button
        title="Back to log in"
        onPress={() => navigation.navigate(NavigationNames.SignIn)}
      />
    </EmailForm>*/