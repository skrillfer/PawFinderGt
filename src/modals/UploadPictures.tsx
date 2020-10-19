import React, {Component, useState} from 'react';

import { View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Image,PermissionsAndroid } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { ReactNativeModal } from "react-native-modal";
import { AirbnbRating } from "react-native-ratings";
import numeral from "numeral";
import { Avatar } from "../components/avatar";
import { Divider } from "../components/divider";
import { Theme } from "../theme";
import { DoctorModel, ReviewModel } from "../models";
import { useLocalization } from "../localization";
import { DoctorReviewItemRow } from "../components/reviews";
import { useNavigation } from "@react-navigation/native";
import NavigationNames from "../navigations/NavigationNames";

type TProps = {
    isVisible: boolean;
    onDismissModal: () => void;
};

const width = Dimensions.get('window').width;
const initialState = {
  fileList: []
}
export const UploadPictures: React.FC<TProps> = props => {
    const [ ownState, setOwnState ] = useState({...initialState});
    const { getString } = useLocalization();
    const navigation = useNavigation();

    const _renderItem = ({item,index}) => {
      return (
        <View style={styles.itemViewImage}>
          <Image source={item.url} style={styles.itemImage}/>

        </View>
      );
    }

    const onClickAddImage  = () =>{

    }

    const onSelectedImage = (image) => {
      let newDataImg = ownState.fileList;
      const source = {uri: image.path};
      let item = {
        id: Date.now(),
        url: source,
        content: image.data
      }
      newDataImg.push(item);
      setOwnState({fileList: [...newDataImg]});
    }

    const takePhotoFromCamera = () => {
      
    }

    const choosePhotoFromLibrary = () => {
      
    }

    return (
        <ReactNativeModal
          isVisible={props.isVisible}
          swipeDirection={"down"}
          style={styles.modalView}
          onSwipeComplete={props.onDismissModal}
          onBackdropPress={props.onDismissModal}
        >
          <FlatList
            data={ownState.fileList}
            renderItem = {_renderItem }
            keyExtractor= { (item, index) => index.toString()}
            extraData = {ownState}
          />
          <TouchableOpacity style={styles.btnPressStyle} onPress={onClickAddImage}>
            <Text style={styles.txtStyle}>Press Add Image</Text>
          </TouchableOpacity>
        </ReactNativeModal>
      );
};

const styles = StyleSheet.create({
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
    height: '50',
    width:  width - 60,
    alignItems: 'center',
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
  safeAreaContainer: {
    backgroundColor: "white",
    borderTopStartRadius: 24,
    borderTopEndRadius: 24
  },
  modalContainer: {
    padding: 16
  },
  flex1: { flex: 1 },
  modalView: {
    justifyContent: "flex-end",
    margin: 0
  },
  doctorPreviewImage: {
    width: 95,
    height: 95,
    borderRadius: 24
  },
  textContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 6
  },
  doctorFullName: {
    fontSize: 17,
    fontWeight: "600",
    color: Theme.colors.black
  },
  doctorTitle: {
    flex: 1,
    fontSize: 13,
    fontWeight: "600",
    color: Theme.colors.gray,
    marginTop: 6
  },
  buttonContent: {
    backgroundColor: Theme.colors.primaryColor,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 4,
    alignSelf: "flex-start"
  },
  buttonText: { color: "white", fontWeight: "600", fontSize: 12 },
  closeButton: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    marginTop: -4,
    marginEnd: -4
  },
  ratingContent: {
    flexDirection: "row",
    marginVertical: 12,
    alignItems: "center"
  },
  ratingText: {
    fontWeight: "bold",
    fontSize: 26,
    marginEnd: 8,
    color: Theme.colors.black
  },
  ratingReviewsText: {
    fontSize: 13,
    color: Theme.colors.gray,
    marginStart: 8,
    fontWeight: "600",
    opacity: 0.8
  },
  divider: { marginHorizontal: 0, marginVertical: 12 }
});