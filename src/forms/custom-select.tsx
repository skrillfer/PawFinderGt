import * as React from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Picker,
  TextInputProps,
} from 'react-native'
//import {Picker} from '@react-native-community/picker';

import { FieldError } from 'react-hook-form'
interface Props extends TextInputProps {
  name: string
  label?: string
  labelStyle?: TextStyle
  error?: FieldError | undefined
}
export default React.forwardRef<any, Props>(
  (props, ref): React.ReactElement => {
    const { label, labelStyle, error, ...inputProps } = props
    return (
      <View style={styles.container}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <Picker
            key={inputProps.name}
            //ref={ref}
            style={{ height: 50, width: 150 }}
            //{...inputProps}
        >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Text style={styles.textError}>{error && error.message}</Text>
      </View>
    )
  }
)

const styles = StyleSheet.create({
    container: {
      marginVertical: 8,
    },
    inputContainer: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 5,
      paddingLeft: 5,
      fontSize: 16,
      height: 40,
      color: '#c0cbd3',
    },
    label: {
      paddingVertical: 5,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#c0cbd3',
    },
    textError: {
      color: '#fc6d47',
      fontSize: 14,
    },
  });