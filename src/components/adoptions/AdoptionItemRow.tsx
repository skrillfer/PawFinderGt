import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle
} from "react-native";

import { AdoptionModel } from "../../models";
import { Avatar } from "../avatar";
import { Theme } from "../../theme";
import { AirbnbRating } from "react-native-ratings";
import { Ionicons } from "@expo/vector-icons";
import { DoctorDetailsBottomSheet } from "../../modals";

type TProps = {
    item: AdoptionModel;
    style?: ViewStyle;
  };
  export const AdoptionItemRow: React.FC<TProps> = props => {
    return (
        <>
          <View style={[styles.container, props.style]}>
            <Avatar
              status={props.item.isOnline ? "online" : null}
              source={{
                uri: props.item.imageUrl
              }}
              style={styles.avatar}
            />
            <View style={styles.textContent}>
              <Text style={styles.doctorNameText}>{props.item.fullName}</Text>
              <Text style={styles.doctorTitleText}>{props.item.adoptedPet}</Text>
              <Text style={styles.doctorTitleText}>{props.item.adoptedDate.toDateString()}</Text>
              <View style={{ alignSelf: "flex-start", marginTop: 2 }}>
                
              </View>
            </View>
          </View>
          
        </>
      );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingVertical: 14
    },
    avatar: { alignSelf: "center" },
    textContent: { flex: 1, paddingHorizontal: 14 },
    doctorNameText: {
      fontSize: 15,
      fontWeight: "600",
      color: Theme.colors.black
    },
    doctorTitleText: {
      marginTop: 4,
      color: Theme.colors.gray,
      fontSize: 13
    },
    moreButton: {
      paddingHorizontal: 16,
      paddingVertical: 2,
      alignSelf: "flex-start"
    }
  });
  