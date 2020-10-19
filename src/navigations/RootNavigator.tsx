import React,{useEffect,useReducer} from "react";
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageTabNavigator from "./HomePageTabNavigator";
import NavigationNames from "./NavigationNames";
import { useLocalization } from "../localization";
import LoginScreen from "../screens/auth/login-screen";
import SignUp from "../screens/auth/signup-screen";
import AuthReducer from '../react-context/auth/auth-reducer';
import AuthContext from '../react-context/auth/auth-storage';
import { vars } from '../api/config';
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackendResponse } from "../constants/globalInterfaces";

const Stack = createStackNavigator();

export const rootNavigator = () =>{
  let userToken;

  const [state, dispatch] = useReducer(AuthReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });
  useEffect(() => {
    const bootstrapAsync = async () => {

      try {
        userToken = await AsyncStorage.getItem('@auth_token');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  },[]);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        //console.log('POSTING');
        console.log(`${vars.url}/users`);
        
        fetch(`${vars.url}/users/login`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...data}) // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(async (response: BackendResponse) => {
          const { data,status,message } = response;
          if(status){
            console.log(data);
            try {
              await AsyncStorage.setItem('@auth_token', data.token);
            } catch (e) {
              return null;
            }
            dispatch({ type: 'SIGN_IN', token: data.token });
          }else{
            Alert.alert('Error',
            message,
            [ { text: "OK", onPress: () => {} }],
            {cancelable: false});
          }
        })
        .catch(error => {
          Alert.alert('Error',
          error.message,
          [ { text: "OK", onPress: () => {} }],
          {cancelable: false});
        });
      },
      signOut: () => { 
        AsyncStorage.removeItem('@auth_token');
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (data,afterRegister) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        fetch(`${vars.url}/users/register`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...data}) // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(async (response: BackendResponse) => {
          const { data, message, status } = response;
            Alert.alert(status?'Exito':'Error',
            message,
            [ { text: "OK", onPress: () => {
              afterRegister();
            } }],
            {cancelable: false});
        })
        .catch(error => {
          Alert.alert('Error',
          error.message,
          [ { text: "OK", onPress: () => {} }],
          {cancelable: false});
        });
        //dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  //const token = await  getToken();
  //console.log(userToken);
  return (
    <ActionSheetProvider>
      <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {state.userToken?(
              <Stack.Screen name={"Root"} component={HomePageTabNavigator} />
            ):
              (
                <>
                  <Stack.Screen name={NavigationNames.SignIn} component={LoginScreen} />
                  <Stack.Screen name={NavigationNames.SignUp} component={SignUp} />
                </>
              )
            }
          </Stack.Navigator>
      </AuthContext.Provider>
          
      </NavigationContainer>
    </ActionSheetProvider>
    
  );
}
//export default RootNavigator;
