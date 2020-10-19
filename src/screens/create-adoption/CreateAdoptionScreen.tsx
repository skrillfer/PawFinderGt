import React, { Component, useState, useEffect, useRef } from "react";
import { View, 
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image, 
  Alert, Platform} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Divider, TouchableHighlight } from "../../components";
import { Theme } from "../../theme";
import { useLocalization } from "../../localization";
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useForm } from 'react-hook-form';
import Form from '../../forms/custom-form';
import Input from '../../forms/custon-input';
import Select from '../../forms/custom-select';


import { useActionSheet } from '@expo/react-native-action-sheet'
import * as Permissions from 'expo-permissions';

type TProps = {};

const width = Dimensions.get('window').width;
const initialState = {
  fileList: []
}

type Inputs = {
  email: string,
  password: string,
  shelterName: string,
  address: string,
  phone: string,
  celular: string,
  repeatPassword: string
};

const validation = {
  petName: {required: {value: true, message: 'Nombre es requerido.'}}
}

export const CreateAdoptionScreen: React.FC<TProps> = props => {
  const [ ownState, setOwnState ] = useState({...initialState});
  const { showActionSheetWithOptions } = useActionSheet();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const ref = useRef(null);
  const { getString } = useLocalization();
  const { handleSubmit, register, setValue, errors }= useForm<Inputs>();

  useEffect(() => {
    (async () => {
      setOwnState({fileList:[]});
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const _renderItem = ({item,index}) => {
    return (
      <View style={styles.itemViewImage}>
        <Image source={{ uri: item.url }} style={styles.itemImage}>
          
        </Image>
        
        <TouchableHighlight underlayColor = "#ffa456"
                onPress = {()=>onDeleteImage(item.id)}
                style = {{ backgroundColor: '#fff'}} >
                  <Text style={styles.deleteImage}> ELIMINAR </Text>
        </TouchableHighlight >
      </View>
    );
  }

  const handlePhoto = async () => {
    if(this.cameraRef){
      let photo = await this.cameraRef.current.takePictureAsync();
      console.log(photo);
    }  
  }
  const onClickAddImage  = () =>{
    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
  const options = ['Tomar Foto', 'Elegir de Libreria', 'Cancelar'];
  const destructiveButtonIndex = 0;
  const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        switch(buttonIndex){
          case 0:
            takePhotoFromCamera();
            break;
          case 1:
            choosePhotoFromLibrary();
            break;
          case 2: // cancel
            break;
        }
        // Do something here depending on the button index selected
      },
    );
  }

  const onSelectedImage = (image) => {
    let newDataImg = ownState.fileList;
    let item = {
      id: Date.now(),
      url: image.uri,
      content: 'data:image/jpeg;base64,' + image.base64
    }
    newDataImg.push(item);
    setOwnState({fileList: [...newDataImg]});
  }

  const takePhotoFromCamera =  async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      const statusR = await Permissions.askAsync(Permissions.CAMERA);
      if (statusR.status !== "granted") {
        return;
      }
    }
    return (
      <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePhoto}
          >
            <Text>Snap Photo</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
    );
  }

  const choosePhotoFromLibrary = async () => {
    /*const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      const statusR = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (statusR.status !== "granted") {
        return;
      }
    }*/
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    if (!result.cancelled) {
      onSelectedImage(result);
    }
  }

  const onDeleteImage = (id) => {
    let newDataImg = ownState.fileList.filter(img => img.id!==id);
    setOwnState({fileList: [...newDataImg]});
  }
  return (
    <SafeAreaView style={styles.flex1}>
      <ScrollView
        style={styles.flex1}
        contentContainerStyle={styles.scrollContainer}
      >
                      <Select name="petType" label="Tipo" />

        <Text style={styles.nameText}>Nueva Adopcion</Text>
        <Text style={styles.daysText}>13. days</Text>

        <View style={styles.formContainer}>
          <Form {...{ register, setValue, validation, errors }}>
              <Input name="petName" label="Nombre" />
          </Form>
        
        </View>
        
      
        <FlatList
            data={ownState.fileList}
            renderItem = {_renderItem }
            keyExtractor= { (item, index) => index.toString()}
            extraData = {ownState}
        />
        <TouchableOpacity style={styles.btnPressStyle} onPress={onClickAddImage}>
          <Text style={styles.txtStyle}>Agregar imagen</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  formContainer: {
    padding: 8,
    flex: 1,
  },
  deleteImage: {
    color: 'red',

  },
  itemViewImage:{
    alignItems: 'center',
    borderRadius: 0,
    marginTop: 10
  },
  itemImage:{
    backgroundColor: '#2F455C',
    height: 150,
    width: width - 50,
    borderRadius: 8,
    resizeMode: 'contain'
  },
  txtStyle:{
    color: '#ffffff'
  },
  btnPressStyle: {
    backgroundColor: '#0080ff',
    height: 50,
    width:  width - 60,
    marginTop: 10,
    marginLeft: (width - (width - 60))/2,
    alignItems: 'center',
    //textAlign:'center',
    justifyContent: 'center'
  },
  content:{
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30
  },

  container: { flex: 1 },
  flex1: { flex: 1 },
  scrollContainer: { paddingVertical: 16 },
  imageStyle: {
    width: 130,
    height: 130,
    borderRadius: 36,
    borderColor: Theme.colors.primaryColor,
    borderWidth: 0.5,
    alignSelf: "center",
    marginTop: 36
  },
  nameText: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "600",
    marginTop: 16,
    color: Theme.colors.black
  },
  daysText: {
    alignSelf: "center",
    fontSize: 14,
    marginTop: 6,
    color: Theme.colors.black
  },
  menuRowContent: {
    flexDirection: "row",
    paddingStart: 12,
    paddingEnd: 16,
    paddingVertical: 16
  },
  iconContent: {
    width: 32
  },
  menuRowsContent: { paddingHorizontal: 8, flex: 1 },
  menuRowTitle: {
    fontSize: 17
  },
  menuRowSubtitle: {
    fontSize: 12,
    marginTop: 4
  },
  divider: { marginStart: 46 }
});
