/*import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text } from 'react-native';
import { setToken } from '../api/token';
import AuthContext from '../react-context/auth/auth-storage';
import { useForm } from "react-hook-form";
*/

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthContext from '../react-context/auth/auth-storage';

import Constants from 'expo-constants';
import { useForm } from 'react-hook-form';

// You can import from local files
import Input from './custon-input';
import Form from './custom-form';
import validation from './validation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationNames } from '../navigations';
import { useNavigation } from '@react-navigation/native';

type Inputs = {
    email: string,
    password: string,
    shelterName: string,
    address: string,
    phone: string,
    celular: string,
    repeatPassword: string
  };
const width = Dimensions.get('window').width;

const SignUpForm = ({ buttonText, children, onAuthentication }) => {
  //const [email, onChangeEmail] = useState('');
  //const [password, onChangePassword] = useState('');
  //const [errorMessage, setErrorMessage] = useState('');
  const { handleSubmit, register, setValue, errors }= useForm<Inputs>();
  const { signUp } = React.useContext(AuthContext);
  const navigation = useNavigation();



  const onSubmit = (data: FormData) => {
    const {password, repeatPassword, ...others} = data as any;
    if(password!==repeatPassword){
        Alert.alert('Password no coinciden.');
        return;
    }
    signUp({...others,password,isFinalUser:1},navigation.navigate(NavigationNames.SignIn));
    //Alert.alert('data', JSON.stringify(data));
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
            <Form {...{ register, setValue, validation, errors }}>
            <Input name="shelterName" label="Nombre refugio" />
            <Input name="email" label="Email" />
            <Input name="address" label="Direccion"/>
            <Input name="phone" label="Telefono" />
            <Input name="celular" label="Celular" />
            <Input name="password" label="Password" secureTextEntry={true} />
            <Input name="repeatPassword" label="Confirmar Password" secureTextEntry={true} />

            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btnPressStyle}>
                <Text style = {styles.txtStyle}>
                    Registrar
                </Text> 
            </TouchableOpacity>
            </Form>
        </View>      
      
        {/*<Button title={buttonText} onPress={submitBtn} />*/}
        {/*children*/}
    </KeyboardAwareScrollView>
  );
};
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
});
*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#181e34',
    },
    formContainer: {
      padding: 8,
      flex: 1,
    },
    txtStyle:{
        color: '#ffffff',
        fontSize: 16
      },
    btnPressStyle: {
        padding: 0,
        backgroundColor: '#0080ff',
        height: 50,
        width:  width - 60,
        marginTop: 10,
        marginLeft: (width - (width - 60))/2,
        alignItems: 'center',
        //textAlign:'center',
        justifyContent: 'center'
    }
});
export default SignUpForm;